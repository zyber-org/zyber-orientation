const divisions = [
  {
    cls: 'div-tech',
    label: 'Tech',
    tasks: ['App Development', 'QA'],
  },
  {
    cls: 'div-comms',
    label: 'Comms',
    tasks: ['Faces of Zyber', 'Carousel', 'Reels', 'Push Notifications', 'Digital Channels', 'Twitter WG'],
  },
  {
    cls: 'div-gtm',
    label: 'GTM',
    tasks: ['Campus TF', 'Community TF', 'Partnerships'],
  },
  {
    cls: 'div-research',
    label: 'Research',
    tasks: ['Gamification', 'UI/UX', 'Connect', 'Communities', 'Events'],
  },
]

export default function Step6({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">06 · YOUR STRUCTURE</p>
      <h1>You have two homes at Zyber.</h1>
      <p style={{ marginBottom: 28 }}>Two parallel tracks. Both matter. Both move at the same time.</p>

      <div className="twin-grid">
        <div className="card" style={{ margin: 0 }}>
          <div style={{ fontSize: 22, marginBottom: 10 }}>🏛️</div>
          <h3>College Zyber Hub</h3>
          <p>Your college team is the node. You are responsible for Zyber taking root at your campus. You lead the partnerships with societies and communities. You run the activations. You make things work on the ground.</p>
          <p style={{ marginBottom: 0 }}>Every piece of feedback you gather from your campus, every friction point a user hits, every idea that comes up in a conversation — that goes back into the product. You are the direct link between your college and what gets built next.</p>
        </div>
        <div className="twin-plus">+</div>
        <div className="card" style={{ margin: 0 }}>
          <div style={{ fontSize: 22, marginBottom: 10 }}>⚡</div>
          <h3>Your Task Force</h3>
          <p style={{ marginBottom: 0 }}>You also belong to one cross college task force organised by function. Research, GTM, Communications or Tech. This is where your skill building happens, alongside builders from every college in the network. Your task force work feeds directly into the product.</p>
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: 13, textAlign: 'center', margin: '4px 0 24px' }}>Your College Zyber Hub is your home base. Your Task Force is where you build.</p>

      <div className="org-tree">
        <div className="org-root-wrap">
          <div className="org-root">ZYBER CORE</div>
        </div>
        <div className="org-connector">
          <div className="org-connector-line" />
        </div>
        <div className="org-divisions">
          {divisions.map(d => (
            <div className="org-division" key={d.label}>
              <div className="org-div-connector">
                <div className="org-div-connector-line" />
              </div>
              <div className={`org-div-header ${d.cls}`}>{d.label}</div>
              <div className="org-tasks">
                {d.tasks.map(t => <div key={t}>{t}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ color: 'var(--accent)', margin: '28px 0 32px' }}>The structure is flat. If you have something to say, say it to the right person and say it directly.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
