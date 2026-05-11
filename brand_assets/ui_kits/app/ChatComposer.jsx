// ChatComposer.jsx — Aula chat composer
const ChatComposer = () => {
  const [msgs, setMsgs] = React.useState([
    { from: 'agent', body: 'Hola Lucía. Acabamos de terminar la Sem 3. ¿Quieres que prepare la transcripción del cliente Acme para tu memo?' },
    { from: 'me', body: 'Sí, pero céntrate en los riesgos que mencionaron al final.' },
    { from: 'agent', body: 'Listo. Tres riesgos identificados. ¿Memo en formato propuesta o resumen interno?' },
  ]);
  const [draft, setDraft] = React.useState('');
  const send = () => {
    if (!draft.trim()) return;
    setMsgs(m => [...m, { from: 'me', body: draft }]);
    setDraft('');
  };
  return (
    <div style={ccStyles.wrap}>
      <div style={ccStyles.feed}>
        {msgs.map((m, i) => (
          <div key={i} style={{ ...ccStyles.msg, ...(m.from === 'me' ? ccStyles.me : ccStyles.agent) }}>
            <div style={ccStyles.from}>{m.from === 'me' ? '// LUCÍA' : '// AGENTE'}</div>
            <div style={ccStyles.body}>{m.body}</div>
          </div>
        ))}
      </div>
      <div style={ccStyles.composer}>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder="Escribe en tu voz. El agente la conserva."
          style={ccStyles.textarea}
        />
        <div style={ccStyles.row}>
          <div style={ccStyles.chips}>
            <span style={ccStyles.chip}>📎 Acme · entrevista.m4a</span>
            <span style={ccStyles.chip}>+ Adjuntar</span>
          </div>
          <button onClick={send} style={ccStyles.send}>ENVIAR →</button>
        </div>
      </div>
    </div>
  );
};

const ccStyles = {
  wrap: { display: 'flex', flexDirection: 'column', gap: 16, height: '100%' },
  feed: { display: 'flex', flexDirection: 'column', gap: 14, flex: 1, overflowY: 'auto' },
  msg: { padding: '14px 18px', borderRadius: 8, maxWidth: 640 },
  agent: { background: '#25221E', border: '1px solid rgba(216,210,200,0.12)', alignSelf: 'flex-start' },
  me: { background: 'rgba(216,90,43,0.10)', border: '1px solid rgba(216,90,43,0.35)', alignSelf: 'flex-end' },
  from: { fontFamily: '"Space Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D85A2B', marginBottom: 6 },
  body: { fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: 14, lineHeight: 1.5, color: '#F4F1EB' },
  composer: { background: '#25221E', border: '1px solid rgba(216,210,200,0.18)', borderRadius: 10, padding: 14 },
  textarea: {
    width: '100%', minHeight: 80, background: 'transparent', border: 'none', outline: 'none',
    color: '#F4F1EB', fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: 14, resize: 'none',
    boxSizing: 'border-box',
  },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  chips: { display: 'flex', gap: 8 },
  chip: {
    fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.04em',
    color: '#C9C1B3', background: '#2F2B26',
    padding: '5px 9px', borderRadius: 3, border: '1px solid rgba(216,210,200,0.12)',
  },
  send: {
    background: '#D85A2B', color: '#F4F1EB', border: 'none',
    padding: '9px 14px', borderRadius: 4, cursor: 'pointer',
    fontFamily: '"Space Mono", monospace', fontSize: 12, letterSpacing: '0.10em', textTransform: 'uppercase',
  },
};

window.ChatComposer = ChatComposer;
