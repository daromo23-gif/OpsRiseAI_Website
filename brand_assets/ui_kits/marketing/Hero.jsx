// Hero.jsx — Silkscreen hero block with Ember CTA
const Hero = () => (
  <section style={heroStyles.section}>
    <div style={heroStyles.dots} />
    <div style={heroStyles.inner}>
      <div style={heroStyles.eyebrow}>// AI · CONSULTORÍA · EDUCACIÓN</div>
      <h1 style={heroStyles.display}>Sin código.<br/>Sin perder tu voz.</h1>
      <p style={heroStyles.lede}>
        Pasé 12 años dentro de Fortune 500. Ahora enseño a consultores a
        integrar AI en su trabajo — sin escribir una sola línea.
      </p>
      <div style={heroStyles.actions}>
        <a href="#cta" style={heroStyles.primary}>UNIRSE AHORA →</a>
        <a href="#casos" style={heroStyles.secondary}>VER CASOS REALES</a>
      </div>
      <div style={heroStyles.meta}>
        <span>v1.0 — 2026</span>
        <span>·</span>
        <span>Próximo cohort: Septiembre</span>
        <span>·</span>
        <span>4 plazas</span>
      </div>
    </div>
  </section>
);

const heroStyles = {
  section: {
    position: 'relative',
    padding: '120px 32px 96px',
    overflow: 'hidden',
  },
  dots: {
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(rgba(244,241,235,0.06) 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    pointerEvents: 'none',
  },
  inner: { maxWidth: 1100, margin: '0 auto', position: 'relative' },
  eyebrow: {
    fontFamily: '"Space Mono", monospace',
    fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: '#D85A2B', marginBottom: 24,
  },
  display: {
    fontFamily: '"Silkscreen", monospace',
    fontWeight: 700, fontSize: 96, lineHeight: 1,
    textTransform: 'uppercase',
    color: '#F4F1EB', margin: '0 0 32px',
  },
  lede: {
    fontFamily: '"DM Sans", sans-serif', fontWeight: 300,
    fontSize: 22, lineHeight: 1.55, color: '#C9C1B3',
    maxWidth: 640, margin: '0 0 40px',
  },
  actions: { display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 },
  primary: {
    background: '#D85A2B', color: '#F4F1EB',
    padding: '14px 22px', borderRadius: 4,
    fontFamily: '"Space Mono", monospace', fontSize: 13,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    textDecoration: 'none',
    boxShadow: '0 0 0 1px rgba(216,90,43,0.35), 0 6px 20px rgba(216,90,43,0.25)',
  },
  secondary: {
    background: 'transparent', color: '#F4F1EB',
    padding: '13px 22px', borderRadius: 4,
    border: '1px solid #D85A2B',
    fontFamily: '"Space Mono", monospace', fontSize: 13,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    textDecoration: 'none',
  },
  meta: {
    display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap',
    fontFamily: '"Space Mono", monospace', fontSize: 11,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: '#8C8377',
  },
};

window.Hero = Hero;
