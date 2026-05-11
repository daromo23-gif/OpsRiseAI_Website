// Testimonial.jsx — case-real testimonial
const Testimonial = ({ quote, name, role, num }) => (
  <figure style={testStyles.figure}>
    <div style={testStyles.tag}>// CASO REAL Nº {num}</div>
    <blockquote style={testStyles.quote}>"{quote}"</blockquote>
    <figcaption style={testStyles.cap}>
      <div style={testStyles.name}>{name}</div>
      <div style={testStyles.role}>{role}</div>
    </figcaption>
  </figure>
);

const testStyles = {
  figure: {
    margin: 0, padding: '32px 28px',
    background: '#322723',
    border: '1px solid rgba(216,90,43,0.30)',
    borderRadius: 10,
  },
  tag: {
    fontFamily: '"Space Mono", monospace', fontSize: 11,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    color: '#D85A2B', marginBottom: 18,
  },
  quote: {
    fontFamily: '"DM Serif Display", serif', fontWeight: 400, fontStyle: 'italic',
    fontSize: 26, lineHeight: 1.35, color: '#F4F1EB',
    margin: '0 0 22px', textWrap: 'pretty',
  },
  cap: { display: 'flex', flexDirection: 'column', gap: 4 },
  name: { fontFamily: '"DM Sans", sans-serif', fontWeight: 400, fontSize: 14, color: '#F4F1EB' },
  role: { fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#8C8377' },
};

window.Testimonial = Testimonial;
