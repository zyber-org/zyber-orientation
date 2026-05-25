const incentives = [
  {
    icon: '🤖',
    title: 'Agentic AI Skills',
    body: 'You will work with AI agent workflows from day one. Not theory. Not a course. Real automation, real outputs, on a live product. This is the skill gap most professionals will spend years trying to close. You will close it now.',
  },
  {
    icon: '📈',
    title: 'Real Elevation',
    body: 'Zyber is flat and fast. Builders who deliver move up quickly. Task Force lead, Division lead, core decisions. There is no queue. There is no waiting your turn. Your output is the only thing that determines how far you go.',
  },
  {
    icon: '🌐',
    title: 'The Builder Network',
    body: 'Every person in this cohort is someone who chose to build instead of watch. Across top campuses, across four divisions, this is your peer group now. The people you work alongside here will be the ones you call when you are starting something, hiring for something or figuring something out five years from now. Build those relationships like they matter. They will.',
  },
  {
    icon: '🎓',
    title: 'Expert Access',
    body: 'Regular sessions with MBB consultants, founders and investors. Not a lecture series. Actual conversations with people who have done it, where you can ask the questions that matter to you.',
  },
  {
    icon: '⚡',
    title: 'Sharp Learning Curve',
    body: 'Working on a live product with real stakes is the fastest way to learn. You will make decisions, see them play out and adjust. That loop is worth more than any internship where you are shadowing someone else\'s work.',
  },
  {
    icon: '✅',
    title: 'Proof of Work',
    body: 'Your contributions are real and attributable. What you build, write, research or ship is yours. That is what you take forward. Actual proof that you can do the work.',
  },
]

export default function Step8({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">08 · WHAT YOU GET</p>
      <h1>This is not a line on your CV. It is a launchpad.</h1>
      <p style={{ marginBottom: 28 }}>Here is what building at Zyber actually gives you.</p>

      <div className="incentive-grid" style={{ marginBottom: 24 }}>
        {incentives.map(inc => (
          <div className="incentive-card" key={inc.title}>
            <div className="incentive-icon">{inc.icon}</div>
            <div className="incentive-title">{inc.title}</div>
            <p className="incentive-body">{inc.body}</p>
          </div>
        ))}
      </div>

      <p style={{ color: 'var(--accent)', marginBottom: 32 }}>The builders who go all in here will look back at this as one of the most important things they did in college. We mean that.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
