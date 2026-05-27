const divisions = [
  {
    icon: '📣',
    label: 'Communications',
    cls: 'div-comms',
    borderColor: '#A78BFA',
    headerBg: 'rgba(167,139,250,0.12)',
    tfs: [
      { name: 'Faces of Zyber', body: 'Real stories from real builders and users. You find them, shape them and put them out. You also get to be on camera. If you have a story worth telling, you are the face too.' },
      { name: 'Carousel', body: 'The visual storytelling arm. You turn ideas and insights into content people actually stop to read.' },
      { name: 'Reels', body: 'Short form video. You script it, brief it and make sure every reel earns its watch time. And yes, if you are comfortable on camera, you star in them too.' },
      { name: 'LinkedIn Working Group', body: 'Dedicated to Zyber\'s LinkedIn presence, content strategy and professional community growth. You plan and publish LinkedIn-native content consistently, adapt founder posts and campus stories for LinkedIn, engage with comments and DMs and track impressions, follower growth and engagement rate per post.' },
      { name: 'Push Notifications', body: 'The most underrated task force. You figure out who to send to, when to send, what to say and how to bring people back. Segmentation, timing, CTR optimisation. Every word and every decision counts.' },
      { name: 'Digital Channels', body: 'You own the presence across every platform Zyber shows up on. Website, X, Reddit, WhatsApp communities and any new channel worth being on.' },
      { name: 'Twitter / X Working Group', body: 'Dedicated to Zyber\'s X presence, real-time engagement and audience growth. You plan X-native content and threads, participate in conversations relevant to Zyber, maintain the brand voice across all posts and track impressions, replies, reposts and follower growth.' },
    ],
  },
  {
    icon: '📈',
    label: 'GTM',
    cls: 'div-gtm',
    borderColor: '#34D399',
    headerBg: 'rgba(52,211,153,0.12)',
    tfs: [
      { name: 'Growth', isHeader: true },
      { name: 'Campus Task Force', body: 'You own college penetration. Activations, on ground presence, downloads, word of mouth. You are the reason Zyber spreads campus by campus.' },
      { name: 'Community Task Force', body: 'You build and scale the communities that live on Zyber. Seeding, engagement, keeping them alive and growing.' },
      { name: 'Events Task Force', body: 'Drives event-based user acquisition and activation. You identify high-conversion campus events, own the strategy to get users to RSVP and show up, use events as a primary channel for new downloads and sign-ups, coordinate with society partners on co-hosted events and follow up on attendees to convert them to active Zyber users.' },
      { name: 'Partnerships', body: 'You bring in the institutions, societies and external collaborators. You negotiate, you sign, you make the handshake happen.' },
    ],
  },
  {
    icon: '🔬',
    label: 'Research',
    cls: 'div-research',
    borderColor: '#FBBF24',
    headerBg: 'rgba(251,191,36,0.12)',
    tfs: [
      { name: 'Gamification', body: 'You design the mechanics that make Zyber addictive in the right way. Streaks, scores, leaderboards, reward loops.' },
      { name: 'UI/UX', body: 'You own the experience. Flows, friction points, what feels right and what does not. You talk to users and turn that into decisions.' },
      { name: 'Connect', body: 'You work on everything that shapes how two people find and connect with each other. The swipe card experience, the information hierarchy on each card, what signals the algorithm weighs and how the matching engine ranks relevance. You study what makes a match feel right and what makes someone swipe past. Everything you learn feeds directly into what Tech builds next.' },
      { name: 'Communities', body: 'You research how communities behave on the platform. What makes them grow, what makes them go quiet.' },
      { name: 'Events', body: 'You design how events work on Zyber. The flow, the pre-event recommendations, the experience from RSVP to room.' },
      { name: 'Product Team', body: 'Ensures all updates are released promptly and communicated to users at the right moment. You coordinate timely shipping of every update across all task forces, craft and trigger push notifications for new features, design post-install onboarding flows and maintain the internal and user-facing changelog every update.' },
    ],
  },
  {
    icon: '💻',
    label: 'Tech',
    cls: 'div-tech',
    borderColor: '#38BDF8',
    headerBg: 'rgba(56,189,248,0.12)',
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
              {div.tfs.map(tf =>
                tf.isHeader ? (
                  <div key={tf.name} style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: div.borderColor,
                    opacity: 0.75,
                    marginTop: 14,
                    marginBottom: 6,
                  }}>
                    {tf.name}
                  </div>
                ) : (
                  <div className="tf-row" key={tf.name} style={{ alignItems: 'flex-start' }}>
                    <span className="tf-name" style={{
                      width: 160,
                      minWidth: 160,
                      maxWidth: 180,
                      flexShrink: 0,
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      alignSelf: 'flex-start',
                    }}>
                      {tf.name}
                    </span>
                    <span className="tf-desc">{tf.body}</span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <p style={{ color: 'var(--accent)', marginBottom: 32 }}>You will be placed in one task force to start. As you grow, nothing stops you from contributing across divisions.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
