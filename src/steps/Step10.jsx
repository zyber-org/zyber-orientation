import { useRef } from 'react'
import html2canvas from 'html2canvas'

const LINKEDIN_URL =
  'https://www.linkedin.com/sharing/share-offsite/?url=https://zybernow.com&summary=' +
  encodeURIComponent(
    'Just joined Zyber as a Builder. Real work on a live product alongside some sharp people. Excited for what is ahead. zybernow.com #ZyberBuilder'
  )

export default function Step10({ user }) {
  const posterRef = useRef(null)

  const name = user.name || 'Builder'
  const college = user.college || ''
  const course = user.course || ''
  const collegeAndCourse = [college, course].filter(Boolean).join(' · ')
  const safeName = name.replace(/\s+/g, '-').toLowerCase()

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
        <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfFP1PhYf0goaIL-4o4ZNlfjRkl-StjrN0kTSsSwWoMvSu-KQ/viewform?embedded=true"
            width="100%"
            style={{
              minHeight: 600,
              border: 'none',
              display: 'block',
              background: 'transparent',
            }}
            title="Zyber Builder End Form"
          />
        </div>
      </div>

      {/* ── Action buttons ── */}
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

      <p style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'center', marginTop: 8, marginBottom: 0 }}>
        zybernow.com
      </p>

      {/* ── Hidden 1080×1080 poster ── */}
      <div
        ref={posterRef}
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          width: '1080px',
          height: '1080px',
          backgroundColor: '#0A0818',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px 64px',
          boxSizing: 'border-box',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Background gradient layers */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, #3B1F6B 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(124,58,237,0.4) 0%, transparent 45%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 15% 80%, rgba(91,184,212,0.3) 0%, transparent 40%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.08) 0%, transparent 50%)',
        }} />

        {/* Top row: wordmark left, badge right */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'auto',
          zIndex: 1,
        }}>
          <div style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.25em',
            color: '#A78BFA',
            textTransform: 'uppercase',
          }}>
            ZYBER
          </div>
          <div style={{
            background: 'rgba(251,191,36,0.15)',
            border: '1px solid #FBBF24',
            borderRadius: 999,
            padding: '6px 16px',
            fontSize: 14,
            fontWeight: 700,
            color: '#FBBF24',
            letterSpacing: '0.08em',
          }}>
            ✦ BUILDER
          </div>
        </div>

        {/* Hero text — centered vertically ~40% from top */}
        <div style={{
          position: 'absolute',
          top: '38%',
          left: 80,
          right: 80,
          zIndex: 1,
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 52,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 16,
            lineHeight: 1.1,
          }}>
            I'm building
          </div>
          <div style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            marginBottom: 20,
          }}>
            {name}
          </div>
          <div style={{
            fontSize: 28,
            fontWeight: 500,
            color: '#A78BFA',
            marginBottom: 40,
          }}>
            {collegeAndCourse}
          </div>

          {/* Horizontal rule */}
          <div style={{
            width: '60%',
            height: 1,
            background: 'rgba(255,255,255,0.1)',
            margin: '0 auto 32px',
          }} />

          {/* Three words */}
          <div style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Real work · Real product · Real people
          </div>
        </div>

        {/* Bottom left footer */}
        <div style={{
          position: 'absolute',
          bottom: 64,
          left: 80,
          zIndex: 1,
        }}>
          <div style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.3)',
            marginBottom: 8,
          }}>
            zybernow.com
          </div>
          <div style={{
            fontSize: 12,
            color: '#5BB8D4',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            RIGHT PERSON · RIGHT REASON · RIGHT NOW
          </div>
        </div>
      </div>
    </div>
  )
}
