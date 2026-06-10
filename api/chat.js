// Vercel Serverless Function — proxies chat messages to Claude.
// The ANTHROPIC_API_KEY stays server-side and is never exposed to the browser.
// Set it in Vercel → Settings → Environment Variables.

const SYSTEM_PROMPT = `You are the OpsRise AI assistant, embedded on opsrise.ai.
OpsRise AI helps companies design and deploy AI operations systems and voice agents —
automating workflows, customer interactions, and back-office operations.

Your job:
- Answer visitor questions about OpsRise AI's services (AI operations systems, voice agents,
  consulting), approach, and outcomes — clearly and concisely.
- Be warm, sharp, and genuinely helpful. Keep replies short (2–4 sentences) unless asked for detail.
- When a visitor shows buying intent or asks about pricing, scoping, or getting started,
  encourage them to book an intro call or leave their details so the team can follow up.
- Never invent specific prices, guarantees, or client names you don't know. If unsure, say so
  and offer to connect them with the team.

Keep the tone professional but human. You represent the brand.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'The assistant is not configured yet. Please add ANTHROPIC_API_KEY in Vercel.',
    });
  }

  try {
    // Body may arrive parsed (Vercel) or as a string — handle both.
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const messages = Array.isArray(body.messages) ? body.messages : [];

    if (messages.length === 0) {
      return res.status(400).json({ error: 'No messages provided.' });
    }

    // Keep the conversation bounded and well-formed for the API.
    const cleaned = messages
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-12)
      .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: cleaned,
      }),
    });

    if (!apiRes.ok) {
      const detail = await apiRes.text();
      console.error('Anthropic API error:', apiRes.status, detail);
      // Surface the upstream reason so configuration issues (e.g. low credit
      // balance, invalid key, model access) are diagnosable from the client.
      let reason = '';
      try {
        reason = JSON.parse(detail)?.error?.message || '';
      } catch {
        reason = detail.slice(0, 200);
      }
      return res.status(502).json({
        error: `The assistant had trouble responding (Anthropic ${apiRes.status})${reason ? ': ' + reason : ''}`,
      });
    }

    const data = await apiRes.json();
    const reply = (data.content || [])
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim();

    return res.status(200).json({ reply: reply || "I'm not sure how to answer that — want to book a quick call?" });
  } catch (err) {
    console.error('chat handler error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
