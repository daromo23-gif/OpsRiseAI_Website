// ProofRow.jsx — "12 años en estas casas" — text-based logo row (no real logos shipped)
const ProofRow = () => (
  <section style={proofStyles.section}>
    <div style={proofStyles.inner}>
      <div style={proofStyles.label}>// 12 AÑOS DENTRO DE</div>
      <div style={proofStyles.row}>
        {['MCKINSEY', 'BCG', 'DELOITTE', 'EY-PARTHENON', 'BAIN'].map(n => (
          <div key={n} style={proofStyles.brand}>{n}</div>
        ))}
      </div>
    </div>
  </section>
);

const proofStyles = {
  section: { padding: '48px 32px', borderTop: '1px solid rgba(216,210,200,0.10)', borderBottom: '1px solid rgba(216,210,200,0.10)' },
  inner: { maxWidth: 1100, margin: '0 auto' },
  label: {
    fontFamily: '"Space Mono", monospace',
    fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: '#D85A2B', marginBottom: 20,
  },
  row: {
    display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center',
  },
  brand: {
    fontFamily: '"DM Serif Display", serif',
    fontSize: 22, color: '#8C8377',
    letterSpacing: '0.02em',
  },
};

window.ProofRow = ProofRow;
