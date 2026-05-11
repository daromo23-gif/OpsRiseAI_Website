// Sidebar.jsx — Aula app sidebar
const Sidebar = ({ active, onSelect }) => {
  const items = [
    { id: 'home', label: 'Inicio', icon: 'home' },
    { id: 'flows', label: 'Mis flujos', icon: 'layers' },
    { id: 'aula', label: 'Aula · Sept', icon: 'book', tag: '4' },
    { id: 'biblio', label: 'Biblioteca', icon: 'archive' },
    { id: 'agente', label: 'Mi agente', icon: 'cpu' },
  ];
  return (
    <aside style={sbStyles.bar}>
      <div style={sbStyles.brand}>
        <img src="../../assets/DR-logomark-ember.png" alt="" style={{ width: 24, height: 24 }} />
        <div>
          <div style={sbStyles.name}>Aula</div>
          <div style={sbStyles.tag}>// DANIEL ROJAS</div>
        </div>
      </div>
      <nav style={sbStyles.nav}>
        {items.map(it => (
          <button
            key={it.id}
            onClick={() => onSelect(it.id)}
            style={{ ...sbStyles.item, ...(active === it.id ? sbStyles.itemActive : {}) }}
          >
            <span style={sbStyles.dot(active === it.id)} />
            <span style={sbStyles.label}>{it.label}</span>
            {it.tag && <span style={sbStyles.count}>{it.tag}</span>}
          </button>
        ))}
      </nav>
      <div style={sbStyles.foot}>
        <div style={sbStyles.user}>
          <div style={sbStyles.avatar}>LM</div>
          <div>
            <div style={sbStyles.userName}>Lucía Mendieta</div>
            <div style={sbStyles.userRole}>// COHORT 06</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const sbStyles = {
  bar: {
    width: 240, background: '#181613', borderRight: '1px solid rgba(216,210,200,0.10)',
    display: 'flex', flexDirection: 'column', height: '100vh',
  },
  brand: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '20px 18px', borderBottom: '1px solid rgba(216,210,200,0.08)',
  },
  name: { fontFamily: '"DM Serif Display", serif', fontSize: 20, color: '#F4F1EB', lineHeight: 1 },
  tag: { fontFamily: '"Space Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8C8377', marginTop: 4 },
  nav: { padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 2, flex: 1 },
  item: {
    background: 'transparent', border: 'none', textAlign: 'left',
    padding: '9px 12px', borderRadius: 4, cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: 12,
    color: '#C9C1B3', fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: 14,
  },
  itemActive: { background: 'rgba(216,90,43,0.12)', color: '#F4F1EB' },
  dot: (active) => ({
    width: 6, height: 6, borderRadius: 1,
    background: active ? '#D85A2B' : 'rgba(216,210,200,0.25)',
  }),
  label: { flex: 1 },
  count: {
    fontFamily: '"Space Mono", monospace', fontSize: 10, letterSpacing: '0.10em',
    color: '#1C1A17', background: '#F8C4B0', padding: '2px 7px', borderRadius: 3,
  },
  foot: { padding: 14, borderTop: '1px solid rgba(216,210,200,0.08)' },
  user: { display: 'flex', alignItems: 'center', gap: 10 },
  avatar: {
    width: 32, height: 32, borderRadius: 4, background: '#D85A2B',
    color: '#F4F1EB', display: 'grid', placeItems: 'center',
    fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.05em',
  },
  userName: { fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: '#F4F1EB' },
  userRole: { fontFamily: '"Space Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8C8377', marginTop: 2 },
};

window.Sidebar = Sidebar;
