const groups = [
  {
    label: '📱 App',
    items: [
      'Download Zyber and create your profile',
      'Get 5 friends on the app — your personal feedback loop',
    ],
  },
  {
    label: '📸 Instagram',
    items: [
      'Follow @zybernow',
      'Add to your bio: Building @zybernow — start of bio, exact copy',
      'Turn on post notifications: profile → Following → Notifications → Posts',
    ],
  },
  {
    label: '💼 LinkedIn',
    items: [
      'Follow the Zyber LinkedIn page',
      'Add to your headline: Building @Zyber — set as current title',
      'Add experience: Title → Builder | Company → Zyber | Start → May 2025',
      'Turn on post notifications: Zyber page → bell icon → All posts',
      'Connect with Falit Sijariya on LinkedIn',
    ],
  },
  {
    label: '🐦 Twitter / X',
    items: [
      'Follow @zybernow on X',
      'Add to your bio: Building @zybernow',
      'Turn on notifications: @zybernow profile → bell → All posts',
    ],
  },
]

export default function Step9({ checked, toggleCheck, onNext }) {
  const total = checked.length
  const done = checked.filter(Boolean).length
  const allDone = done === total

  let globalIndex = 0

  return (
    <div className="page">
      <p className="section-label">09 · FIRST ACTIONS</p>
      <h1>Do these before your first orientation.</h1>
      <div className="live-counter">
        <span>{done}</span> of {total} complete
      </div>

      {groups.map(group => (
        <div key={group.label}>
          <div className="checklist-group-label">{group.label}</div>
          {group.items.map(item => {
            const idx = globalIndex++
            return (
              <div
                key={idx}
                className={`checklist-row${checked[idx] ? ' checked' : ''}`}
                onClick={() => toggleCheck(idx)}
              >
                <div className={`check-box${checked[idx] ? ' checked' : ''}`}>
                  {checked[idx] ? '✓' : ''}
                </div>
                <span className="checklist-label">{item}</span>
              </div>
            )
          })}
        </div>
      ))}

      <div style={{ marginTop: 32 }}>
        <button
          className="btn-primary"
          onClick={onNext}
          disabled={!allDone}
        >
          I'm ready. →
        </button>
      </div>
    </div>
  )
}
