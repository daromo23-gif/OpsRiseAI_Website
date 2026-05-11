// ModuleCard.jsx — module card for the program
const ModuleCard = ({ num, title, desc, duration, tag }) => (
  <article style={moduleStyles.card}>
    <div style={moduleStyles.head}>
      <span style={moduleStyles.num}>{num}</span>
      {tag && <span style={moduleStyles.tag}>{tag}</span>}
    </div>
    <h3 style={moduleStyles.title}>{title}</h3>
    <p style={moduleStyles.desc}>{desc}</p>
    <div style={moduleStyles.foot}>
      <span style={moduleStyles.duration}>{duration}</span>
      <span style={moduleStyles.arrow}>→</span>
    </div>
  </article>
);

const moduleStyles = {
  card: {
    background: '#25221E',
    border: '1px solid rgba(216,210,200,0.12)',
    borderRadius: 10,
    padding: '24px 24px 20px',
    display: 'flex', flexDirection: 'column', gap: 10,
    minHeight: 240,
  },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  num: {
    fontFamily: '"Silkscreen", monospace', fontWeight: 700, fontSize: 18,
    color: '#D85A2B', letterSpacing: '0.04em',
  },
  tag: {
    fontFamily: '"Space Mono", monospace', fontSize: 10,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    color: '#1C1A17', background: '#F8C4B0',
    padding: '3px 8px', borderRadius: 3,
  },
  title: {
    fontFamily: '"DM Serif Display", serif', fontWeight: 400,
    fontSize: 24, lineHeight: 1.15, margin: 0, color: '#F4F1EB',
  },
  desc: {
    fontFamily: '"DM Sans", sans-serif', fontWeight: 300,
    fontSize: 14, lineHeight: 1.55, color: '#C9C1B3',
    margin: 0, flex: 1, textWrap: 'pretty',
  },
  foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  duration: {
    fontFamily: '"Space Mono", monospace', fontSize: 11,
    letterSpacing: '0.10em', textTransform: 'uppercase', color: '#8C8377',
  },
  arrow: { color: '#D85A2B', fontFamily: '"Space Mono", monospace', fontSize: 16 },
};

window.ModuleCard = ModuleCard;
