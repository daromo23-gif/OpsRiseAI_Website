/* ============================================================================
   OpsRise AI — Chat Widget
   Self-contained: injects styles + markup, talks to /api/chat (Claude),
   captures leads to Formspree (xzdoobej), and offers a Cal.com booking button.
   Loaded on every page via: <script src="/chat-widget.js" defer></script>
   ============================================================================ */
(function () {
  'use strict';

  if (window.__opsriseChatLoaded) return;
  window.__opsriseChatLoaded = true;

  var FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdoobej';
  var CALCOM_LINK = 'https://cal.com/daniel-rojas-fnumec/30min';
  var STORAGE_KEY = 'opsrise_chat_history';

  /* ---- styles (scoped under #opsrise-chat) ---- */
  var css = [
    '#opsrise-chat,#opsrise-chat *{box-sizing:border-box;margin:0;padding:0;}',
    '#opsrise-chat{position:fixed;bottom:24px;right:24px;z-index:99999;font-family:"DM Sans",system-ui,sans-serif;}',
    '#orc-toggle{width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;background:#D85A2B;color:#F4F1EB;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 30px rgba(216,90,43,0.4);transition:transform .25s cubic-bezier(.16,1,.3,1),background .2s;}',
    '#orc-toggle:hover{transform:scale(1.06);background:#BF4D22;}',
    '#orc-toggle svg{width:26px;height:26px;}',
    '#orc-panel{position:absolute;bottom:76px;right:0;width:380px;max-width:calc(100vw - 32px);height:560px;max-height:calc(100vh - 120px);background:#1C1A17;border:1px solid rgba(216,210,200,0.14);border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,0.5);display:none;flex-direction:column;overflow:hidden;}',
    '#opsrise-chat.open #orc-panel{display:flex;animation:orcUp .3s cubic-bezier(.16,1,.3,1);}',
    '@keyframes orcUp{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}',
    '#orc-head{padding:18px 20px;background:#25221E;border-bottom:1px solid rgba(216,210,200,0.12);display:flex;align-items:center;gap:11px;}',
    '#orc-dot{width:9px;height:9px;border-radius:50%;background:#5fd38a;box-shadow:0 0 8px #5fd38a;flex:none;}',
    '#orc-head h3{color:#F4F1EB;font-size:15px;font-weight:500;letter-spacing:.2px;}',
    '#orc-head p{color:#8C8377;font-size:12px;font-family:"Space Mono",monospace;margin-top:2px;}',
    '#orc-close{margin-left:auto;background:none;border:none;color:#8C8377;cursor:pointer;font-size:22px;line-height:1;padding:4px;}',
    '#orc-close:hover{color:#F4F1EB;}',
    '#orc-msgs{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:12px;}',
    '#orc-msgs::-webkit-scrollbar{width:6px;}#orc-msgs::-webkit-scrollbar-thumb{background:rgba(216,210,200,0.18);border-radius:3px;}',
    '.orc-msg{max-width:84%;padding:11px 14px;border-radius:14px;font-size:14.5px;line-height:1.55;white-space:pre-wrap;word-wrap:break-word;}',
    '.orc-bot{align-self:flex-start;background:#2F2B26;color:#E9E4DB;border-bottom-left-radius:4px;}',
    '.orc-user{align-self:flex-end;background:#D85A2B;color:#F4F1EB;border-bottom-right-radius:4px;}',
    '.orc-typing{align-self:flex-start;display:flex;gap:4px;padding:13px 15px;background:#2F2B26;border-radius:14px;border-bottom-left-radius:4px;}',
    '.orc-typing span{width:7px;height:7px;border-radius:50%;background:#8C8377;animation:orcBlink 1.2s infinite;}',
    '.orc-typing span:nth-child(2){animation-delay:.2s;}.orc-typing span:nth-child(3){animation-delay:.4s;}',
    '@keyframes orcBlink{0%,60%,100%{opacity:.3;}30%{opacity:1;}}',
    '#orc-actions{display:flex;gap:8px;padding:0 18px 12px;flex-wrap:wrap;}',
    '.orc-action{flex:1;min-width:120px;text-align:center;padding:9px 12px;border-radius:10px;font-size:12.5px;font-family:"Space Mono",monospace;cursor:pointer;text-decoration:none;border:1px solid rgba(216,210,200,0.18);color:#C9C1B3;background:transparent;transition:all .18s;}',
    '.orc-action:hover{border-color:#D85A2B;color:#F4F1EB;}',
    '.orc-action.primary{background:#D85A2B;border-color:#D85A2B;color:#F4F1EB;}',
    '.orc-action.primary:hover{background:#BF4D22;}',
    '#orc-form{padding:14px 18px;border-top:1px solid rgba(216,210,200,0.12);display:flex;gap:9px;align-items:flex-end;}',
    '#orc-input{flex:1;resize:none;background:#25221E;border:1px solid rgba(216,210,200,0.16);border-radius:11px;color:#F4F1EB;font-family:inherit;font-size:14.5px;padding:10px 12px;max-height:90px;line-height:1.4;}',
    '#orc-input:focus{outline:none;border-color:#D85A2B;}',
    '#orc-input::placeholder{color:#8C8377;}',
    '#orc-send{flex:none;width:42px;height:42px;border-radius:11px;border:none;background:#D85A2B;color:#F4F1EB;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s;}',
    '#orc-send:hover{background:#BF4D22;}#orc-send:disabled{opacity:.5;cursor:not-allowed;}',
    '#orc-send svg{width:18px;height:18px;}',
    '.orc-lead{align-self:stretch;background:#25221E;border:1px solid rgba(216,210,200,0.14);border-radius:14px;padding:15px;display:flex;flex-direction:column;gap:9px;}',
    '.orc-lead p{color:#C9C1B3;font-size:13px;line-height:1.5;}',
    '.orc-lead input{background:#1C1A17;border:1px solid rgba(216,210,200,0.16);border-radius:9px;color:#F4F1EB;font-family:inherit;font-size:14px;padding:9px 11px;}',
    '.orc-lead input:focus{outline:none;border-color:#D85A2B;}',
    '.orc-lead button{background:#D85A2B;border:none;border-radius:9px;color:#F4F1EB;font-family:"Space Mono",monospace;font-size:12.5px;padding:10px;cursor:pointer;transition:background .2s;}',
    '.orc-lead button:hover{background:#BF4D22;}.orc-lead button:disabled{opacity:.6;cursor:default;}',
    '@media(max-width:480px){#orc-panel{width:calc(100vw - 24px);height:calc(100vh - 110px);}#opsrise-chat{bottom:16px;right:16px;}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ---- markup ---- */
  var root = document.createElement('div');
  root.id = 'opsrise-chat';
  root.innerHTML =
    '<button id="orc-toggle" aria-label="Open chat">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>' +
    '</button>' +
    '<div id="orc-panel" role="dialog" aria-label="OpsRise AI chat">' +
      '<div id="orc-head"><span id="orc-dot"></span><div><h3>OpsRise AI</h3><p>// USUALLY REPLIES INSTANTLY</p></div><button id="orc-close" aria-label="Close chat">&times;</button></div>' +
      '<div id="orc-msgs"></div>' +
      '<div id="orc-actions">' +
        '<a class="orc-action primary" href="' + CALCOM_LINK + '" target="_blank" rel="noopener">Book a call</a>' +
        '<button class="orc-action" id="orc-leadbtn" type="button">Leave details</button>' +
      '</div>' +
      '<form id="orc-form"><textarea id="orc-input" rows="1" placeholder="Ask about AI operations or voice agents…"></textarea>' +
        '<button id="orc-send" type="submit" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>' +
      '</form>' +
    '</div>';
  document.body.appendChild(root);

  /* ---- refs ---- */
  var toggle = root.querySelector('#orc-toggle');
  var panel = root.querySelector('#orc-panel');
  var closeBtn = root.querySelector('#orc-close');
  var msgsEl = root.querySelector('#orc-msgs');
  var form = root.querySelector('#orc-form');
  var input = root.querySelector('#orc-input');
  var sendBtn = root.querySelector('#orc-send');
  var leadBtn = root.querySelector('#orc-leadbtn');

  var history = [];
  try { history = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || []; } catch (e) { history = []; }

  function save() {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-20))); } catch (e) {}
  }

  function scrollDown() { msgsEl.scrollTop = msgsEl.scrollHeight; }

  function addBubble(role, text) {
    var div = document.createElement('div');
    div.className = 'orc-msg ' + (role === 'user' ? 'orc-user' : 'orc-bot');
    div.textContent = text;
    msgsEl.appendChild(div);
    scrollDown();
    return div;
  }

  function showTyping() {
    var t = document.createElement('div');
    t.className = 'orc-typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    msgsEl.appendChild(t);
    scrollDown();
    return t;
  }

  function render() {
    msgsEl.innerHTML = '';
    if (history.length === 0) {
      addBubble('assistant', "Hi! I'm the OpsRise AI assistant. Ask me anything about AI operations systems or voice agents — or book a call whenever you're ready.");
    } else {
      history.forEach(function (m) { addBubble(m.role, m.content); });
    }
  }

  function openChat() {
    root.classList.add('open');
    render();
    setTimeout(function () { input.focus(); }, 100);
  }
  function closeChat() { root.classList.remove('open'); }

  toggle.addEventListener('click', function () {
    root.classList.contains('open') ? closeChat() : openChat();
  });
  closeBtn.addEventListener('click', closeChat);

  /* auto-grow textarea */
  input.addEventListener('input', function () {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 90) + 'px';
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
  });

  /* ---- send message ---- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;

    addBubble('user', text);
    history.push({ role: 'user', content: text });
    save();
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;

    var typing = showTyping();

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ messages: history.slice(-12) })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (res) {
        typing.remove();
        var reply = res.ok && res.d.reply
          ? res.d.reply
          : (res.d && res.d.error) || 'Sorry, I had trouble responding. You can book a call and we’ll follow up directly.';
        addBubble('assistant', reply);
        if (res.ok && res.d.reply) { history.push({ role: 'assistant', content: reply }); save(); }
      })
      .catch(function () {
        typing.remove();
        addBubble('assistant', 'Connection issue on my end. Please try again, or book a call and we’ll reach out.');
      })
      .finally(function () { sendBtn.disabled = false; input.focus(); });
  });

  /* ---- lead capture (Formspree) ---- */
  leadBtn.addEventListener('click', function () {
    if (msgsEl.querySelector('.orc-lead')) return;
    var card = document.createElement('div');
    card.className = 'orc-lead';
    card.innerHTML =
      '<p>Leave your details and the team will reach out.</p>' +
      '<input type="text" name="name" placeholder="Name" autocomplete="name" />' +
      '<input type="email" name="email" placeholder="Email" autocomplete="email" required />' +
      '<input type="text" name="message" placeholder="What are you looking to solve? (optional)" />' +
      '<button type="button">// SEND DETAILS</button>';
    msgsEl.appendChild(card);
    scrollDown();

    var btn = card.querySelector('button');
    btn.addEventListener('click', function () {
      var name = card.querySelector('[name=name]').value.trim();
      var email = card.querySelector('[name=email]').value.trim();
      var message = card.querySelector('[name=message]').value.trim();
      if (!email) { card.querySelector('[name=email]').focus(); return; }

      btn.disabled = true;
      btn.textContent = '// SENDING…';

      var fd = new FormData();
      fd.append('name', name);
      fd.append('email', email);
      fd.append('message', message || 'Lead from chat widget');
      fd.append('source', 'chat-widget');

      fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: fd, headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (r.ok) {
            card.innerHTML = '<p>✓ Got it — we’ll be in touch shortly. Want to grab a time now? <a href="' + CALCOM_LINK + '" target="_blank" rel="noopener" style="color:#D85A2B;text-decoration:underline;">Book a call</a></p>';
          } else {
            btn.disabled = false; btn.textContent = '// FAILED — RETRY';
          }
        })
        .catch(function () { btn.disabled = false; btn.textContent = '// FAILED — RETRY'; });
    });
  });
})();
