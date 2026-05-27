import { useEffect } from 'react'

export default function Step10({ user, onNext }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  const name = user.name || 'Builder'
  const college = user.college || ''

  return (
    <div className="completion-wrap">
      {/* ── Completion card ── */}
      <div className="completion-card">
        <div className="completion-wordmark">ZYBER</div>
        <div className="completion-badge">✦ ZYBER BUILDER ✦</div>
        <div className="completion-name">{name}</div>
        {college && (
          <div className="completion-college">{college}</div>
        )}
        <div className="completion-footer-text">
          Orientation complete · May 2026
        </div>
      </div>

      {/* ── Message ── */}
      <div style={{ maxWidth: 360, width: '100%', marginBottom: 32, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: 16, marginBottom: 10 }}>
          You are in. Welcome to the team.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 10 }}>
          Show up to your first orientation call this week. Details will come on WhatsApp. Until then, make sure your checklist is done and your profile is live on the app.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 0 }}>
          See you on the other side.
        </p>
      </div>

      {/* ── Tally Form ── */}
      <div style={{ width: '100%', maxWidth: 640, marginBottom: 32 }}>
        <p style={{
          fontSize: 11,
          color: 'var(--text-secondary)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 12,
          textAlign: 'center',
        }}>
          One last thing before you go.
        </p>
        <div style={{
          background: '#13102A',
          border: '1px solid rgba(167,139,250,0.2)',
          borderRadius: '12px',
          padding: '8px',
          width: '100%',
          overflow: 'hidden',
        }}>
          <iframe
            src="https://tally.so/embed/2ED0b9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Zyber Builder Orientation Form"
            style={{ border: 'none', minHeight: '600px', display: 'block' }}
          />
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ width: '100%', maxWidth: 640, marginBottom: 16 }}>
        <button
          className="btn-primary"
          onClick={onNext}
          style={{ width: '100%', padding: '15px 24px' }}
        >
          📸 Get your poster and share
        </button>
      </div>

      <p style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'center', marginTop: 8, marginBottom: 0 }}>
        zybernow.com
      </p>
    </div>
  )
}
