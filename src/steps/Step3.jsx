export default function Step3({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">03 · THE PRODUCT</p>
      <h1>What we have built.</h1>
      <p style={{ marginBottom: 28 }}>Zyber is live on Android and iOS. Here is what is already in your hands.</p>

      <div className="card">
        <h3>The Matching Engine</h3>
        <p>At the core is a matching engine that looks at who you are, what you care about, where you are from and what you are working towards. It finds the most relevant person in your proximity and gives you a 30 second window to connect. AI generates a specific reason for every match so you always know exactly why this person is worth your time. Call Mode, Chat Mode, Meet Mode. Over 50,000 texts exchanged in beta and counting.</p>
      </div>

      <div className="card">
        <h3>Communities</h3>
        <p>Zyber is a one stop platform to run your community. Interact within curated circles built around what matters: consulting societies across colleges, students from the same region, people chasing the same goals. Your community is no longer limited to who showed up to the last meeting.</p>
      </div>

      <div className="card">
        <h3>Events</h3>
        <p>Host events on Zyber and our AI tells every attendee who they should meet within the room before the event even starts. Add value that goes far beyond the speaker. Supercharge your meetups, society events and fests so that every person walks away with a connection that actually matters.</p>
      </div>

      <p style={{ color: 'var(--accent)', marginBottom: 32 }}>We ship roughly two updates every week, packed with new features. What you flag today gets built this week. That is not a figure of speech.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
