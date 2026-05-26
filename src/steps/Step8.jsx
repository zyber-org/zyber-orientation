const incentives = [
  {
    icon: '🤖',
    title: 'Agentic AI Skills',
    body: 'Real automation, real outputs, on a live product. Not theory. Not a course.',
    accent: 'The skill gap most professionals will spend years closing. You close it now.',
  },
  {
    icon: '📈',
    title: 'Real Elevation',
    body: 'Builders who deliver move up quickly. Task Force lead, Division lead, core decisions.',
    accent: 'No queue. No waiting your turn. Output is the only currency.',
  },
  {
    icon: '🌐',
    title: 'The Builder Network',
    body: 'Every person in this cohort chose to build instead of watch. Across top campuses, across four divisions.',
    accent: 'Across top campuses. This is your peer group now.',
  },
  {
    icon: '🎓',
    title: 'Expert Access',
    body: 'Regular sessions with MBB consultants, founders and investors. Actual conversations, not lectures.',
    accent: 'MBB consultants. Founders. Investors. Real conversations.',
  },
  {
    icon: '⚡',
    title: 'Sharp Learning Curve',
    body: 'Working on a live product with real stakes. You make decisions, see them play out and adjust.',
    accent: 'A month here is worth a semester of theory.',
  },
  {
    icon: '✅',
    title: 'Proof of Work',
    body: 'Your contributions are real and attributable. What you build, write, research or ship is yours.',
    accent: 'Real and attributable. Yours to take forward.',
  },
]

export default function Step8({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">08 · WHAT YOU GET</p>
      <h1>This is not a line on your CV. It is a launchpad.</h1>
      <p style={{ marginBottom: 32 }}>Here is what building at Zyber actually gives you.</p>

      <div className="incentive-grid" style={{ marginBottom: 24 }}>
        {incentives.map(inc => (
          <div className="incentive-card" key={inc.title}>
            <div className="incentive-icon" style={{ fontSize: 28, marginBottom: 12 }}>{inc.icon}</div>
            <div className="incentive-title" style={{ fontSize: 15, marginBottom: 8 }}>{inc.title}</div>
            <p className="incentive-body">{inc.body}</p>
            <p className="card-accent-line">{inc.accent}</p>
          </div>
        ))}
      </div>

      <p style={{ color: 'var(--accent)', marginBottom: 32 }}>The builders who go all in here will look back at this as one of the most important things they did in college. We mean that.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
