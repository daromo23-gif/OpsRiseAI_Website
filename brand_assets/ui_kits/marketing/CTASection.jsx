// CTASection.jsx — closing CTA band
const CTASection = () => {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <section id="cta" style={ctaStyles.band}>
      <div style={ctaStyles.inner}>
        <div style={ctaStyles.eyebrow}>// PRÓXIMO COHORT — SEPTIEMBRE 2026</div>
        <h2 style={ctaStyles.h2}>4 plazas. 6 semanas. Horas reales conmigo.</h2>
        <p style={ctaStyles.p}>
          Si tu trabajo es vender propuestas, escribir memos o entregar
          análisis — y crees que AI puede ayudarte sin reemplazarte —
          esto es para ti.
        </p>
        {!sent ? (
          <form style={ctaStyles.form} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input
              type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              style={ctaStyles.input}
            />
            <button type="submit" style={ctaStyles.btn}>UNIRSE AHORA →</button>
          </form>
        ) : (
          <div style={ctaStyles.sent}>
            <span style={ctaStyles.check}>✓</span>
            <span>Recibido. Te escribo en las próximas 24 horas.</span>
          </div>
        )}
        <div style={ctaStyles.disclaimer}>Sin spam · Cancelas cuando quieras</div>
      </div>
    </section>
  );
};

const ctaStyles = {
  band: {
    padding: '96px 32px',
    borderTop: '1px solid rgba(216,210,200,0.10)',
    background: '#1C1A17',
  },
  inner: { maxWidth: 760, margin: '0 auto', textAlign: 'center' },
  eyebrow: { fontFamily: '"Space Mono", monospace', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D85A2B', marginBottom: 24 },
  h2: { fontFamily: '"DM Serif Display", serif', fontWeight: 400, fontSize: 44, lineHeight: 1.1, margin: '0 0 20px', color: '#F4F1EB' },
  p: { fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: 17, lineHeight: 1.6, color: '#C9C1B3', maxWidth: 580, margin: '0 auto 36px' },
  form: { display: 'flex', gap: 8, maxWidth: 460, margin: '0 auto', justifyContent: 'center' },
  input: {
    flex: 1, background: '#25221E', border: '1px solid rgba(216,210,200,0.18)',
    borderRadius: 4, padding: '13px 14px', color: '#F4F1EB',
    fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: 14, outline: 'none',
  },
  btn: {
    background: '#D85A2B', color: '#F4F1EB', border: 'none',
    padding: '13px 18px', borderRadius: 4,
    fontFamily: '"Space Mono", monospace', fontSize: 13,
    letterSpacing: '0.10em', textTransform: 'uppercase', cursor: 'pointer',
  },
  sent: {
    display: 'inline-flex', gap: 12, alignItems: 'center',
    fontFamily: '"DM Sans", sans-serif', fontSize: 16, color: '#F4F1EB',
    border: '1px solid rgba(216,90,43,0.4)', padding: '14px 22px', borderRadius: 6,
  },
  check: { color: '#D85A2B', fontFamily: '"Space Mono", monospace', fontSize: 18 },
  disclaimer: { fontFamily: '"Space Mono", monospace', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#8C8377', marginTop: 18 },
};

window.CTASection = CTASection;
