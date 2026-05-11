// Nav.jsx — sticky top nav
const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav style={navStyles.bar}>
      <div style={navStyles.inner}>
        <a href="#" style={navStyles.brand}>
          <img src="../../assets/DR-logomark-ember.png" alt="" style={{ width: 28, height: 28 }} />
          <span style={navStyles.name}>Daniel Rojas</span>
        </a>
        <div style={navStyles.links}>
          <a href="#modulos" style={navStyles.link}>Programa</a>
          <a href="#casos" style={navStyles.link}>Casos reales</a>
          <a href="#sobre" style={navStyles.link}>Sobre Daniel</a>
          <a href="#blog" style={navStyles.link}>Notas</a>
          <a href="#cta" style={navStyles.cta}>UNIRSE AHORA →</a>
        </div>
      </div>
    </nav>
  );
};

const navStyles = {
  bar: {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(28,26,23,0.85)',
    borderBottom: '1px solid rgba(216,210,200,0.12)',
    backdropFilter: 'blur(8px)',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto', padding: '14px 32px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  brand: {
    display: 'flex', alignItems: 'center', gap: 10,
    color: '#F4F1EB', textDecoration: 'none',
    fontFamily: '"DM Serif Display", serif', fontSize: 20,
  },
  name: { lineHeight: 1 },
  links: { display: 'flex', alignItems: 'center', gap: 28 },
  link: {
    color: '#C9C1B3', textDecoration: 'none',
    fontFamily: '"Space Mono", monospace', fontSize: 12,
    letterSpacing: '0.10em', textTransform: 'uppercase',
  },
  cta: {
    background: '#D85A2B', color: '#F4F1EB',
    padding: '9px 14px', borderRadius: 4,
    fontFamily: '"Space Mono", monospace', fontSize: 12,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    textDecoration: 'none',
  },
};

window.Nav = Nav;
