const traits = ['Curious', 'Self-directed', 'Moves fast', 'Owns outcomes', 'No ego', 'Builder mentality']

export default function Step2({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">02 · THE BUILDER MODEL</p>
      <h1>Built by students. For students. That is not a tagline.</h1>
      <p>We believe the best way to build something is open source and together. With the people it is actually being built for. Zyber runs on a student builder model because students are not just the users, they are the team.</p>

      <div className="stat-row">
        <div className="stat-card">
          <div className="stat-number">14</div>
          <div className="stat-label">top Delhi University colleges where it all started</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4</div>
          <div className="stat-label">divisions: Tech, Research, Comms, GTM</div>
        </div>
        <div className="stat-card">
          <div className="stat-number accent">Live</div>
          <div className="stat-label">on Android and iOS right now</div>
        </div>
      </div>

      <div className="divider" />

      <h2>Why does this matter right now?</h2>
      <p>The jobs that existed five years ago are changing fast. AI is not coming, it is already here. The students who figure out how to work with it, build with it and integrate it into real workflows will be the ones who move ahead. Zyber is a place to do exactly that, on a live product, with real stakes.</p>

      <h2>Who is a Zyber Builder?</h2>
      <p>You are the team. Every bit of Zyber moves because builders push it forward. You own real decisions. Nothing is out of bounds. If you spot something that needs to change, you can change it. If you have an idea that could shift the product trajectory, you bring it in. You will see your calls show up in a live product used by real people.</p>
      <p>By the time you move on from Zyber, you will have the skills, the confidence and the network to start your own thing, or to walk into whatever comes next and genuinely contribute from day one.</p>

      <div style={{ marginTop: 16, marginBottom: 32 }}>
        {traits.map(t => (
          <span key={t} className="pill">{t}</span>
        ))}
      </div>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
