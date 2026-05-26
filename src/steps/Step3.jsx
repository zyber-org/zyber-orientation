const matchingPoints = [
  'Proximity based matching in real time',
  '30 second connection window',
  'AI generated reason to connect for every match',
  'Call Mode for quick conversations',
  'Chat Mode for slower connections',
  'Meet Mode to connect in person',
  '50,000+ texts exchanged in beta',
]

const communityPoints = [
  'Curated circles by interest, region and goal',
  'Consulting societies across colleges in one space',
  'Students from the same hometown or target industry',
  'Your community active every day, not just on event days',
]

const eventPoints = [
  'Host events directly on Zyber',
  'AI recommends who to meet within the attendees before the event starts',
  'Every person walks away with a connection that matters',
  'Add value beyond the speaker',
]

function PointerList({ items }) {
  return (
    <div style={{ marginTop: 12 }}>
      {items.map(item => (
        <div className="pointer-row" key={item}>
          <span className="pointer-dot" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default function Step3({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">03 · THE PRODUCT</p>
      <h1>What we have built.</h1>
      <p style={{ marginBottom: 32, maxWidth: 680 }}>Zyber is live on Android and iOS. Here is what is already in your hands.</p>

      <div className="desktop-three-col" style={{ marginBottom: 32 }}>
        <div className="card">
          <h3>The Matching Engine</h3>
          <PointerList items={matchingPoints} />
        </div>

        <div className="card">
          <h3>Communities</h3>
          <PointerList items={communityPoints} />
        </div>

        <div className="card">
          <h3>Events</h3>
          <PointerList items={eventPoints} />
        </div>
      </div>

      <div className="highlight-strip">
        <p>We ship roughly two updates every week, packed with new features. What you flag today gets built this week. That is not a figure of speech.</p>
      </div>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
