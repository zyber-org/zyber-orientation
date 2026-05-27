import { useRef, useState, useEffect } from 'react'
import html2canvas from 'html2canvas'

const LINKEDIN_URL = 'https://www.linkedin.com/sharing/share-offsite/?url=https://zybernow.com'

const CAPTION = `I just joined Zyber as a Builder.

Zyber is a real-time networking app that connects you with people who share your interests, your background and your drive, right when you are both free. No doomscrolling. No waiting for texts. Just the right person at the right time.

It is built by students, for the world. And right now we are building it together across some of the best campuses in India.

Excited to be part of this from the ground up.

If you want to join us as a Builder, write to builders@zybernow.com

zybernow.com

#Zyber #ZyberBuilder #BuildInPublic #StudentStartup #Startup #Entrepreneurship #DelhiUniversity #NLU #LawSchool #CLAT #CUET #Opportunity #Internship #EarlyStage #Funding #Unicorn #GenZ #Networking #CollegeCommunity #BuildingTogether`

function PosterContent({ name }) {
  return (
    <>
      {/* Background gradient layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 25% 50%, #3B1F6B 0%, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 80% 15%, rgba(124,58,237,0.4) 0%, transparent 45%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 15% 80%, rgba(91,184,212,0.3) 0%, transparent 40%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.1) 0%, transparent 55%)',
      }} />

      {/* Top row: wordmark left, badge right */}
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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

      {/* Hero section — centered at 35% from top */}
      <div style={{
        position: 'absolute',
        top: '35%',
        left: 80,
        right: 80,
        zIndex: 1,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 56,
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 12,
        }}>
          I am {name}
        </div>
        <div style={{
          fontSize: 36,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.2,
          marginBottom: 36,
        }}>
          and I am building Zyber
        </div>

        <div style={{
          fontSize: 22,
          fontWeight: 500,
          color: '#A78BFA',
          marginBottom: 36,
        }}>
          Stop Scrolling. Start Connecting.
        </div>

        <div style={{
          fontSize: 18,
          color: 'rgba(255,255,255,0.8)',
          lineHeight: 1.8,
          marginBottom: 28,
        }}>
          Meet your people. Same interests, same drive,{'\n'}same background, available right now.
        </div>

        <div style={{
          fontSize: 17,
          color: 'rgba(255,255,255,0.5)',
          fontStyle: 'italic',
          marginBottom: 36,
        }}>
          Built by students, for the world.
        </div>

        <div style={{
          width: '60%',
          height: 1,
          background: 'rgba(255,255,255,0.1)',
          margin: '0 auto 32px',
        }} />

        <div style={{ display: 'inline-block', textAlign: 'left' }}>
          <div style={{
            fontSize: 15,
            color: 'rgba(255,255,255,0.4)',
            marginBottom: 6,
          }}>
            To join us, write to
          </div>
          <div style={{
            fontSize: 17,
            fontWeight: 600,
            color: '#5BB8D4',
          }}>
            builders@zybernow.com
          </div>
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
          fontSize: 14,
          color: 'rgba(255,255,255,0.3)',
          marginBottom: 8,
        }}>
          zybernow.com
        </div>
        <div style={{
          fontSize: 11,
          color: '#5BB8D4',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          RIGHT PERSON · RIGHT REASON · RIGHT NOW
        </div>
      </div>
    </>
  )
}

export default function Step11({ user }) {
  const posterRef = useRef(null)
  const previewContainerRef = useRef(null)
  const [previewScale, setPreviewScale] = useState(0.37)
  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const name = user.name || 'Builder'
  const safeName = name.replace(/\s+/g, '-').toLowerCase()

  useEffect(() => {
    const el = previewContainerRef.current
    if (!el) return
    const update = () => setPreviewScale(el.offsetWidth / 1080)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const handleDownload = async () => {
    if (downloading) return
    setDownloading(true)
    const el = posterRef.current
    if (!el) { setDownloading(false); return }
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
    setDownloading(false)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CAPTION)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <div className="page">

      {/* ── 1. LinkedIn share — primary action at top ── */}
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: 640,
          textAlign: 'center',
          textDecoration: 'none',
          padding: '15px 24px',
          marginBottom: 40,
          boxSizing: 'border-box',
        }}
      >
        🔗 Share on LinkedIn
      </a>

      {/* ── 2. Headline ── */}
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>Share your moment.</h1>

      {/* ── 3. Subhead ── */}
      <p style={{ color: 'var(--text-secondary)', marginBottom: 48, maxWidth: 480 }}>
        You just joined something worth talking about. Here is everything you need.
      </p>

      {/* ── 4. Caption section ── */}
      <p className="section-label" style={{ marginBottom: 16 }}>YOUR CAPTION</p>

      <div style={{ position: 'relative', width: '100%', maxWidth: 640, marginBottom: 56 }}>
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            background: copied ? 'rgba(52,211,153,0.12)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${copied ? '#34D399' : 'rgba(255,255,255,0.15)'}`,
            borderRadius: 6,
            color: copied ? '#34D399' : 'var(--text-secondary)',
            fontSize: 12,
            fontWeight: 500,
            padding: '5px 12px',
            cursor: 'pointer',
            transition: 'color 0.15s, border-color 0.15s, background 0.15s',
            zIndex: 1,
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <div style={{
          whiteSpace: 'pre-wrap',
          fontSize: 14,
          lineHeight: 1.75,
          color: 'var(--text-primary)',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          padding: '20px 56px 20px 20px',
        }}>
          {CAPTION}
        </div>
      </div>

      {/* ── 5. Poster section ── */}
      <p className="section-label" style={{ marginBottom: 16 }}>YOUR POSTER</p>

      <div
        ref={previewContainerRef}
        style={{
          width: '100%',
          maxWidth: 400,
          aspectRatio: '1 / 1',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 12,
          marginBottom: 20,
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          backgroundColor: '#0A0818',
          transform: `scale(${previewScale})`,
          transformOrigin: 'top left',
          padding: '72px 80px 64px',
          boxSizing: 'border-box',
          fontFamily: 'Inter, system-ui, sans-serif',
          overflow: 'hidden',
        }}>
          <PosterContent name={name} />
        </div>
      </div>

      <button
        className="btn-secondary"
        onClick={handleDownload}
        disabled={downloading}
        style={{ marginBottom: 56, opacity: downloading ? 0.7 : 1 }}
      >
        {downloading ? 'Generating...' : '📸 Download poster'}
      </button>

      {/* ── 6. Bottom line ── */}
      <p style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'center', marginTop: 8, marginBottom: 0 }}>
        zybernow.com
      </p>

      {/* ── Hidden 1080×1080 poster for html2canvas ── */}
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
          padding: '72px 80px 64px',
          boxSizing: 'border-box',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <PosterContent name={name} />
      </div>
    </div>
  )
}
