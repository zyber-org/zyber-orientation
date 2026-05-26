const divisions = [
  {
    icon: '📣',
    label: 'Communications',
    cls: 'div-comms',
    borderColor: '#A78BFA',
    headerBg: 'rgba(167,139,250,0.12)',
    tfs: [
      { name: 'Faces of Zyber', body: 'Real stories from real builders and users. You find them, shape them and put them out.' },
      { name: 'Carousel', body: 'The visual storytelling arm. You turn ideas and insights into content people actually stop to read.' },
      { name: 'Reels', body: 'Short form video. You script it, brief it and make sure every reel earns its watch time.' },
      { name: 'Push Notifications', body: 'Segmentation, timing, CTR optimisation. Every word and every decision counts.' },
      { name: 'Digital Channels', body: 'You own the presence across every platform Zyber shows up on.' },
    ],
  },
  {
    icon: '📈',
    label: 'GTM',
    cls: 'div-gtm',
    borderColor: '#34D399',
    headerBg: 'rgba(52,211,153,0.12)',
    tfs: [
      { name: 'Campus Task Force', body: 'You own college penetration. Activations, downloads, word of mouth.' },
      { name: 'Community Task Force', body: 'You build and scale the communities that live on Zyber.' },
      { name: 'Partnerships', body: 'You bring in institutions, societies and external collaborators. You make the handshake happen.' },
    ],
  },
  {
    icon: '🔬',
    label: 'Research',
    cls: 'div-research',
    borderColor: '#FBBF24',
    headerBg: 'rgba(251,191,36,0.12)',
    tfs: [
      { name: 'Gamification', body: 'You design the mechanics that make Zyber addictive in the right way.' },
      { name: 'UI/UX', body: 'You own the experience. Flows, friction points, what feels right and what does not.' },
      { name: 'Connect', body: 'You study the core mechanic. What makes a match feel right. You feed that back to Tech.' },
      { name: 'Communities', body: 'You research how communities behave on the platform. What makes them grow.' },
      { name: 'Events', body: 'You design how events work on Zyber. From RSVP to room.' },
    ],
  },
  {
    icon: '💻',
    label: 'Tech',
    cls: 'div-tech',
    borderColor: '#38BDF8',
    headerBg: 'rgba(56,189,248,0.12)',
    tfs: [
      { name: 'App Development', body: 'You are building the product itself. Every update that goes out has your fingerprints on it.' },
      { name: 'QA', body: 'You make sure nothing breaks. Quality is the difference between a product people trust and one they delete.' },
    ],
  },
]

export default function Step7({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">07 · YOUR TASK FORCE</p>
      <h1>Four divisions. Every one of them is building something real.</h1>
      <p style={{ marginBottom: 32 }}>Find your division. This is where your work lives.</p>

      <div className="division-grid">
        {divisions.map(div => (
          <div
            className="division-card"
            key={div.label}
            style={{ borderLeft: `3px solid ${div.borderColor}` }}
          >
            <div
              className="division-card-header"
              style={{ background: div.headerBg, color: div.borderColor }}
            >
              <span>{div.icon}</span>
              <span>{div.label}</span>
            </div>
            <div className="division-card-body">
              {div.tfs.map(tf => (
                <div className="tf-row" key={tf.name}>
                  <span className="tf-name">{tf.name}</span>
                  <span className="tf-desc">{tf.body}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p style={{ color: 'var(--accent)', marginBottom: 32 }}>You will be placed in one task force to start. As you grow, nothing stops you from contributing across divisions.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
