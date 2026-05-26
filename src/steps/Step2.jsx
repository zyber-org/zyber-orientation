const traits = ['Curious', 'Self-directed', 'Moves fast', 'Owns outcomes', 'No ego', 'Builder mentality']

const highlights = [
  'You own real decisions. Nothing is out of bounds.',
  'You will see your ideas show up in a live product.',
  'By the time you leave, you will have the skills, network and confidence to build your own thing.',
]

export default function Step2({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">02 · THE BUILDER MODEL</p>
      <h1>Built by students. For students. That is not a tagline.</h1>
      <p style={{ maxWidth: 680, marginBottom: 32 }}>We believe the best way to build something is open source and together. With the people it is actually being built for. Zyber runs on a student builder model because students are not just the users, they are the team.</p>

      <div className="stat-row" style={{ marginBottom: 40 }}>
        <div className="stat-card">
          <div className="stat-number accent">Top</div>
          <div className="stat-label">campuses across India's best colleges</div>
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

      <div className="desktop-two-col">
        <div>
          <h2>Why does this matter right now?</h2>
          <p>The jobs that existed five years ago are changing fast. AI is not coming, it is already here. The students who figure out how to work with it, build with it and integrate it into real workflows will be the ones who move ahead. Zyber is a place to do exactly that, on a live product, with real stakes.</p>
        </div>

        <div>
          <h2>Who is a Zyber Builder?</h2>
          <p>You are the team. Every bit of Zyber moves because builders push it forward.</p>
          <div style={{ marginTop: 12, marginBottom: 20 }}>
            {highlights.map((h, i) => (
              <div className="highlight-block" key={i}>
                <p>{h}</p>
              </div>
            ))}
          </div>
          <div>
            {traits.map(t => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <button className="btn-primary" onClick={onNext}>Continue →</button>
      </div>
    </div>
  )
}
