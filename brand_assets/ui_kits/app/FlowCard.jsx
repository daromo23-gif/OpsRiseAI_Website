// FlowCard.jsx — saved AI workflow card
const FlowCard = ({ name, desc, tag, runs, last }) => (
  <article style={fcStyles.card}>
    <div style={fcStyles.head}>
      <span style={fcStyles.tag}>{tag}</span>
      <span style={fcStyles.runs}>{runs} runs</span>
    </div>
    <h3 style={fcStyles.name}>{name}</h3>
    <p style={fcStyles.desc}>{desc}</p>
    <div style={fcStyles.foot}>
      <span style={fcStyles.last}>{last}</span>
      <button style={fcStyles.run}>EJECUTAR →</button>
    </div>
  </article>
);

const fcStyles = {
  card: {
    background: '#25221E', border: '1px solid rgba(216,210,200,0.12)',
    borderRadius: 10, padding: 18, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 200,
  },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  tag: {
    fontFamily: '"Space Mono", monospace', fontSize: 10, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: '#D85A2B',
  },
  runs: { fontFamily: '"Space Mono", monospace', fontSize: 10, color: '#8C8377', letterSpacing: '0.04em' },
  name: { fontFamily: '"DM Serif Display", serif', fontWeight: 400, fontSize: 20, color: '#F4F1EB', margin: 0, lineHeight: 1.15 },
  desc: { fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: 13, lineHeight: 1.5, color: '#C9C1B3', margin: 0, flex: 1 },
  foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 },
  last: { fontFamily: '"Space Mono", monospace', fontSize: 10, color: '#8C8377', letterSpacing: '0.04em' },
  run: {
    background: 'transparent', border: '1px solid #D85A2B', color: '#F4F1EB',
    padding: '6px 10px', borderRadius: 3, cursor: 'pointer',
    fontFamily: '"Space Mono", monospace', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase',
  },
};

window.FlowCard = FlowCard;
