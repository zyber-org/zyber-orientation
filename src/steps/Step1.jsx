export default function Step1({ onNext }) {
  const problemCards = [
    {
      icon: '🕐',
      text: 'You have a gap between classes. You are bored on a Tuesday evening. You are looking for plans this weekend. Someone nearby is free too. There is no way to find them.',
    },
    {
      icon: '🏛️',
      text: 'You are in a consulting club, a dance society, a tech team. You share so much with the people around you. But you do not know who is free when you are or what else you have in common.',
    },
    {
      icon: '🌐',
      text: 'The people who could become your closest friends and collaborators are already in your world. You just have not found each other yet.',
    },
  ]

  return (
    <div className="page">
      <div className="desktop-two-col">
        {/* Left — The Problem */}
        <div>
          <p className="section-label">01 · THE PROBLEM</p>
          <h1>You're free. Someone you'd love to know is free too. You just haven't met yet.</h1>
          <div style={{ marginTop: 20 }}>
            {problemCards.map((c, i) => (
              <div className="card" key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
                <p style={{ marginBottom: 0, fontSize: 14, lineHeight: 1.65 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — What We Built */}
        <div>
          <p className="section-label" style={{ marginTop: 0 }}>WHAT WE BUILT</p>
          <h2>Zyber helps you find your people, right now, wherever you are.</h2>
          <p>Open the app whenever you have a free moment. Zyber shows you who is around and available, matched by interests, goals, college and hometown. You see exactly why this person is worth a conversation. One swipe. One call. One friendship that actually goes somewhere.</p>
          <div className="quote-block" style={{ marginTop: 24 }}>
            <p>The goal is simple. Make sure being free never means being alone.</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <button className="btn-primary" onClick={onNext}>Continue →</button>
      </div>
    </div>
  )
}
