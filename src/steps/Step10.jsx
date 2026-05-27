export default function Step10({ user, onNext }) {
  const name = user.name || 'Builder'
  const college = user.college || ''
  const course = user.course || ''
  const collegeAndCourse = [college, course].filter(Boolean).join(' · ')

  return (
    <div className="completion-wrap">
      {/* ── Completion card ── */}
      <div className="completion-card">
        <div className="completion-wordmark">ZYBER</div>
        <div className="completion-badge">✦ ZYBER BUILDER ✦</div>
        <div className="completion-name">{name}</div>
        {collegeAndCourse && (
          <div className="completion-college">{collegeAndCourse}</div>
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

      {/* ── Embedded Google Form ── */}
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
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfFP1PhYf0goaIL-4o4ZNlfjRkl-StjrN0kTSsSwWoMvSu-KQ/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ border: 'none', borderRadius: 12 }}
        >
          Loading form...
        </iframe>
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
