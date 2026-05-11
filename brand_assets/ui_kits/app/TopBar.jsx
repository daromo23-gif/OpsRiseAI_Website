// TopBar.jsx — top bar with breadcrumb + search
const TopBar = ({ title, crumbs = [] }) => (
  <header style={tbStyles.bar}>
    <div style={tbStyles.crumbs}>
      {crumbs.map((c, i) => (
        <React.Fragment key={i}>
          <span style={tbStyles.crumb}>{c}</span>
          {i < crumbs.length - 1 && <span style={tbStyles.sep}>/</span>}
        </React.Fragment>
      ))}
    </div>
    <h1 style={tbStyles.title}>{title}</h1>
    <div style={tbStyles.right}>
      <div style={tbStyles.search}>
        <span style={tbStyles.searchIc}>⌕</span>
        <input style={tbStyles.searchInput} placeholder="Buscar flujos, lecciones, notas…" />
        <span style={tbStyles.kbd}>⌘K</span>
      </div>
      <button style={tbStyles.cta}>NUEVO FLUJO →</button>
    </div>
  </header>
);

const tbStyles = {
  bar: {
    padding: '18px 32px',
    borderBottom: '1px solid rgba(216,210,200,0.10)',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto auto',
    columnGap: 24, rowGap: 6,
    alignItems: 'center',
  },
  crumbs: { display: 'flex', gap: 8, alignItems: 'center', gridColumn: '1 / 2' },
  crumb: { fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#8C8377' },
  sep: { color: '#8C8377', opacity: 0.5 },
  title: { fontFamily: '"DM Serif Display", serif', fontWeight: 400, fontSize: 28, color: '#F4F1EB', margin: 0, gridColumn: '1 / 2' },
  right: { display: 'flex', gap: 12, alignItems: 'center', gridColumn: '2 / 3', gridRow: '1 / 3' },
  search: {
    display: 'flex', alignItems: 'center', gap: 8,
    background: '#25221E', border: '1px solid rgba(216,210,200,0.18)',
    borderRadius: 4, padding: '8px 12px', minWidth: 320,
  },
  searchIc: { color: '#8C8377', fontSize: 14 },
  searchInput: {
    flex: 1, background: 'transparent', border: 'none', outline: 'none',
    color: '#F4F1EB', fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: 13,
  },
  kbd: { fontFamily: '"Space Mono", monospace', fontSize: 10, color: '#8C8377', letterSpacing: '0.04em' },
  cta: {
    background: '#D85A2B', color: '#F4F1EB', border: 'none',
    padding: '10px 14px', borderRadius: 4,
    fontFamily: '"Space Mono", monospace', fontSize: 12,
    letterSpacing: '0.10em', textTransform: 'uppercase', cursor: 'pointer',
  },
};

window.TopBar = TopBar;
