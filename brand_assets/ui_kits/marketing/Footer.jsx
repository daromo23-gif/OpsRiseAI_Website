// Footer.jsx — three-column footer
const Footer = () => (
  <footer style={footerStyles.foot}>
    <div style={footerStyles.inner}>
      <div style={footerStyles.brand}>
        <div style={footerStyles.brandRow}>
          <img src="../../assets/DR-logomark-ember.png" alt="" style={{ width: 24, height: 24 }} />
          <span style={footerStyles.name}>Daniel Rojas</span>
        </div>
        <p style={footerStyles.tag}>AI · Consultoría · Educación</p>
      </div>
      <div style={footerStyles.col}>
        <div style={footerStyles.colHead}>// PROGRAMA</div>
        <a style={footerStyles.link} href="#">Aula — cohort en vivo</a>
        <a style={footerStyles.link} href="#">Cursos asíncronos</a>
        <a style={footerStyles.link} href="#">Recursos gratis</a>
      </div>
      <div style={footerStyles.col}>
        <div style={footerStyles.colHead}>// CONTACTO</div>
        <a style={footerStyles.link} href="#">danielrojas.ai</a>
        <a style={footerStyles.link} href="#">LinkedIn</a>
        <a style={footerStyles.link} href="#">Newsletter</a>
      </div>
    </div>
    <div style={footerStyles.legal}>
      <span>DANIEL ROJAS — V1.0 / 2026</span>
      <span>USO INTERNO Y CONFIDENCIAL · DANIELROJAS.AI</span>
    </div>
  </footer>
);

const footerStyles = {
  foot: { padding: '64px 32px 24px', borderTop: '1px solid rgba(216,210,200,0.10)' },
  inner: { maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 56 },
  brand: { display: 'flex', flexDirection: 'column', gap: 10 },
  brandRow: { display: 'flex', alignItems: 'center', gap: 10 },
  name: { fontFamily: '"DM Serif Display", serif', fontSize: 20, color: '#F4F1EB' },
  tag: { fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8C8377', margin: 0 },
  col: { display: 'flex', flexDirection: 'column', gap: 10 },
  colHead: { fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D85A2B', marginBottom: 6 },
  link: { fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: 14, color: '#C9C1B3', textDecoration: 'none' },
  legal: {
    maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between',
    fontFamily: '"Space Mono", monospace', fontSize: 10, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: '#8C8377',
    paddingTop: 24, borderTop: '1px solid rgba(216,210,200,0.08)',
  },
};

window.Footer = Footer;
