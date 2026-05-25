const values = [
  {
    num: '01',
    title: 'Own it.',
    body: 'If it is yours, it gets done. No waiting to be told twice. No passing the buck. Nobody at Zyber is going to chase you. We trust you to show up and deliver. That trust is the whole model.',
  },
  {
    num: '02',
    title: 'Show up.',
    body: 'Attend your orientation. Hit your deadlines. Be present in your group. Half of building something together is just being reliably there. The builders who grow fastest here are not always the most talented ones. They are the ones who keep showing up.',
  },
  {
    num: '03',
    title: 'Speak directly.',
    body: 'If something is broken, say it. If you disagree with a decision, say it. If you have an idea that nobody has thought of yet, bring it in. We have no room for politics or staying quiet to keep the peace. The best idea wins. Always.',
  },
]

export default function Step5({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">05 · HOW WE WORK</p>
      <h1>Three things we never compromise on.</h1>
      <p style={{ marginBottom: 28 }}>Everything else is flexible. These are not.</p>

      {values.map(v => (
        <div className="value-card" key={v.num}>
          <span className="value-number">{v.num} ·</span>
          <div>
            <h3 style={{ marginBottom: 6 }}>{v.title}</h3>
            <p style={{ marginBottom: 0 }}>{v.body}</p>
          </div>
        </div>
      ))}

      <p style={{ color: 'var(--accent)', margin: '20px 0 32px' }}>You are not here to fill a role. You are here to build something. Act like it.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
