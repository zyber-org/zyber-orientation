export default function Step10({ user }) {
  const linkedInUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=zybernow.com'

  return (
    <div className="completion-wrap">
      <div className="completion-card">
        <div className="completion-wordmark">ZYBER</div>
        <div className="completion-badge">✦ ZYBER BUILDER ✦</div>
        <div className="completion-name">{user.name || 'Builder'}</div>
        <div className="completion-college">{user.college || ''}</div>
        <div className="completion-footer-text">
          Orientation complete · May 2026
        </div>
      </div>

      <div className="completion-actions">
        <button className="btn-secondary">📸 Screenshot &amp; share</button>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            padding: '15px 24px',
          }}
        >
          Share on LinkedIn
        </a>
      </div>

      <p className="completion-note">
        Welcome to the team. Your orientation call details will come via WhatsApp.
      </p>
    </div>
  )
}
