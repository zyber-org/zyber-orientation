const divisions = [
  {
    icon: '📣',
    label: 'Communications',
    cls: 'div-comms',
    tfs: [
      { name: 'Faces of Zyber', body: 'Real stories from real builders and users. You find them, shape them and put them out. You also get to be on camera. If you have a story worth telling, you are the face too.' },
      { name: 'Carousel', body: 'The visual storytelling arm. You turn ideas and insights into content people actually stop to read.' },
      { name: 'Reels', body: 'Short form video. You script it, brief it and make sure every reel earns its watch time. And yes, if you are comfortable on camera, you star in them too.' },
      { name: 'Push Notifications', body: 'The most underrated task force. You figure out who to send to, when to send, what to say and how to bring people back. Segmentation, timing, CTR optimisation. Every word and every decision counts.' },
      { name: 'Digital Channels', body: 'You own the presence across every platform Zyber shows up on. Website, LinkedIn, X, Reddit, WhatsApp communities and any new channel worth being on.' },
    ],
  },
  {
    icon: '📈',
    label: 'GTM',
    cls: 'div-gtm',
    tfs: [
      { name: 'Campus Task Force', body: 'You own college penetration. Activations, on ground presence, downloads, word of mouth. You are the reason Zyber spreads campus by campus.', header: 'Growth' },
      { name: 'Community Task Force', body: 'You build and scale the communities that live on Zyber. Seeding, engagement, keeping them alive and growing.' },
      { name: 'Partnerships', body: 'You bring in the institutions, societies and external collaborators. You negotiate, you sign, you make the handshake happen.', header: 'Partnerships' },
    ],
  },
  {
    icon: '🔬',
    label: 'Research',
    cls: 'div-research',
    tfs: [
      { name: 'Gamification', body: 'You design the mechanics that make Zyber addictive in the right way. Streaks, scores, leaderboards, reward loops.' },
      { name: 'UI/UX', body: 'You own the experience. Flows, friction points, what feels right and what does not. You talk to users and turn that into decisions.' },
      { name: 'Connect', body: 'You study the core mechanic. What makes a match feel right. What makes the 30 second window work. You feed that back to Tech.' },
      { name: 'Communities', body: 'You research how communities behave on the platform. What makes them grow, what makes them go quiet.' },
      { name: 'Events', body: 'You design how events work on Zyber. The flow, the pre-event recommendations, the experience from RSVP to room.' },
    ],
  },
  {
    icon: '💻',
    label: 'Tech',
    cls: 'div-tech',
    tfs: [
      { name: 'App Development', body: 'You are building the product itself. Features, fixes, improvements. Every update that goes out has your fingerprints on it.' },
      { name: 'QA', body: 'You make sure nothing breaks. Quality is not a formality here. It is the difference between a product people trust and one they delete.' },
    ],
  },
]

export default function Step7({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">07 · YOUR TASK FORCE</p>
      <h1>Four divisions. Every one of them is building something real.</h1>
      <p style={{ marginBottom: 28 }}>Find your division. This is where your work lives.</p>

      {divisions.map(div => (
        <div key={div.label} style={{ marginBottom: 24 }}>
          <div className="card" style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 18 }}>{div.icon}</span>
              <span className={`org-div-header ${div.cls}`} style={{ margin: 0, padding: '4px 10px', borderRadius: 6 }}>{div.label}</span>
            </div>
            {div.tfs.map(tf => (
              <div key={tf.name}>
                {tf.header && (
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: '14px 0 8px' }}>{tf.header}</p>
                )}
                <div style={{ marginBottom: 12, paddingLeft: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 3 }}>{tf.name}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 0, lineHeight: 1.55 }}>{tf.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <p style={{ color: 'var(--accent)', marginBottom: 32 }}>You will be placed in one task force to start. As you grow, nothing stops you from contributing across divisions.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
