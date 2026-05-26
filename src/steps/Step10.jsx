import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'

const LINKEDIN_URL =
  'https://www.linkedin.com/sharing/share-offsite/?url=https://zybernow.com&summary=' +
  encodeURIComponent(
    'Just joined Zyber as a Builder. Real work on a live product alongside some sharp people. Excited for what is ahead. zybernow.com #ZyberBuilder'
  )

export default function Step10({ user }) {
  const posterRef = useRef(null)
  const [friends, setFriends] = useState([
    { name: '', college: '' },
    { name: '', college: '' },
    { name: '', college: '' },
  ])

  const name = user.name || 'Builder'
  const college = user.college || ''
  const course = user.course || ''
  const collegeAndCourse = [college, course].filter(Boolean).join(' · ')
  const safeName = name.replace(/\s+/g, '-').toLowerCase()

  const updateFriend = (i, field, val) => {
    setFriends(prev => prev.map((f, idx) => idx === i ? { ...f, [field]: val } : f))
  }

  const handleDownload = async () => {
    const el = posterRef.current
    if (!el) return
    try {
      const canvas = await html2canvas(el, {
        width: 1080,
        height: 1080,
        scale: 1,
        useCORS: true,
        backgroundColor: '#0A0818',
        logging: false,
      })
      const link = document.createElement('a')
      link.download = `zyber-builder-${safeName}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Poster export failed:', err)
    }
  }

  return (
    <div className="completion-wrap">
      {/* Completion card */}
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

      {/* Message */}
      <div style={{ maxWidth: 360, width: '100%', marginBottom: 24, textAlign: 'center' }}>
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

      {/* Friends input section */}
      <div className="friends-section">
        <p className="friends-label">Add your 3 friends — we will help you get them onboarded.</p>
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 14, opacity: 0.7 }}>Optional</p>
        {friends.map((f, i) => (
          <div key={i}>
            <p className="friend-number">Friend {i + 1}</p>
            <div className="friend-row">
              <input
                className="input-field"
                style={{ marginBottom: 0, fontSize: 13, padding: '10px 12px' }}
                type="text"
                placeholder="Friend's name"
                value={f.name}
                onChange={e => updateFriend(i, 'name', e.target.value)}
              />
              <input
                className="input-field"
                style={{ marginBottom: 0, fontSize: 13, padding: '10px 12px' }}
                type="text"
                placeholder="Their college"
                value={f.college}
                onChange={e => updateFriend(i, 'college', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="completion-actions">
        <button className="btn-secondary" onClick={handleDownload}>
          📸 Download your poster
        </button>
        <a
          href={LINKEDIN_URL}
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
          🔗 Share on LinkedIn
        </a>
      </div>

      <p style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'center', marginTop: 4 }}>
        zybernow.com
      </p>

      {/* Hidden 1080×1080 poster */}
      <div
        ref={posterRef}
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          width: '1080px',
          height: '1080px',
          background: 'radial-gradient(ellipse at center, #1a1040 0%, #0A0818 70%)',
          backgroundColor: '#0A0818',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          boxSizing: 'border-box',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '0.2em', color: '#A78BFA', textTransform: 'uppercase', marginBottom: 64 }}>
          ZYBER
        </div>
        <div style={{ fontSize: 48, fontWeight: 600, color: '#F0EFF8', textAlign: 'center', marginBottom: 40, lineHeight: 1.25 }}>
          Just joined as a Builder.
        </div>
        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.6)', textAlign: 'center', lineHeight: 1.6, marginBottom: 64 }}>
          Real work. Real product.<br />Real people.
        </div>
        <div style={{ fontSize: 36, fontWeight: 700, color: '#F0EFF8', marginBottom: 12, textAlign: 'center' }}>
          {name}
        </div>
        {collegeAndCourse && (
          <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.5)', marginBottom: 80, textAlign: 'center' }}>
            {collegeAndCourse}
          </div>
        )}
        <div style={{ flex: 1 }} />
        <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', marginBottom: 16, letterSpacing: '0.04em' }}>
          zybernow.com
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#FBBF24', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          ✦ ZYBER BUILDER ✦
        </div>
      </div>
    </div>
  )
}
