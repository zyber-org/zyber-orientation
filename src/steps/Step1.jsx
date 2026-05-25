export default function Step1({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">01 · THE PROBLEM</p>
      <h1>You're free. Someone you'd love to know is free too. You just haven't met yet.</h1>
      <p>You have a gap between classes. You're bored on a Tuesday evening. You're looking for plans this weekend. In that moment, someone nearby shares your interests, your goals, maybe even your hometown. But there's no way to find them.</p>
      <p>You're in a consulting club, a dance society, a tech team. You're surrounded by people with so much in common with you. But you don't know who's free when you are. You don't know the deeper connections. So most introductions never happen and most friendships never start.</p>
      <p>The people who could become your closest friends, your collaborators, your network are already in your world. You just haven't found each other yet.</p>

      <div className="divider" />

      <p className="section-label">WHAT WE BUILT</p>
      <h2>Zyber helps you find your people, right now, wherever you are.</h2>
      <p>Open the app whenever you have a free moment. Zyber shows you who is around and available, matched by interests, goals, college and hometown. You see exactly why this person is worth a conversation. One swipe. One call. One friendship that actually goes somewhere.</p>
      <p style={{ color: 'var(--accent)', marginTop: 16 }}>The goal is simple. Make sure being free never means being alone.</p>

      <div style={{ marginTop: 40 }}>
        <button className="btn-primary" onClick={onNext}>Continue →</button>
      </div>
    </div>
  )
}
