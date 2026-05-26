const OPTIONAL_INDEX = 3
const COMPULSORY_TOTAL = 12

const leftGroups = [
  {
    label: '📱 App',
    items: [
      { text: 'Download Zyber and create your profile' },
      {
        text: 'Get 3 friends on the app. They are your first feedback loop.',
        subtext: 'You will be able to add their names on the next screen and we will help you get them onboarded after the session.',
      },
    ],
  },
  {
    label: '📸 Instagram',
    items: [
      { text: 'Follow @zybernow' },
      { text: 'Add to your bio: Building @zybernow', optional: true },
      { text: 'Turn on post notifications: profile → Following → Notifications → Posts. Do this now. The first hour of every post is everything.' },
    ],
  },
]

const rightGroups = [
  {
    label: '💼 LinkedIn',
    items: [
      { text: 'Follow the Zyber LinkedIn page' },
      { text: 'Update your headline: Building @Zyber — set as your current title' },
      { text: 'Add experience: Title → Builder | Company → Zyber | Start date → May 2025' },
      { text: 'Turn on post notifications: Zyber LinkedIn page → bell icon → All posts' },
      { text: 'Connect with Falit Sijariya on LinkedIn' },
    ],
  },
  {
    label: '🐦 Twitter / X',
    items: [
      { text: 'Follow @zybernow on X' },
      { text: 'Add to your bio: Building @zybernow' },
      { text: 'Turn on notifications: @zybernow profile → bell icon → All posts' },
    ],
  },
]

// Flatten all items in original order for index mapping
const allGroups = [...leftGroups, ...rightGroups]

function ChecklistGroup({ group, startIndex, checked, toggleCheck }) {
  let idx = startIndex
  return (
    <div>
      <div className="checklist-group-label">{group.label}</div>
      {group.items.map(item => {
        const currentIdx = idx++
        return (
          <div key={currentIdx}>
            <div
              className={`checklist-row${checked[currentIdx] ? ' checked' : ''}`}
              onClick={() => toggleCheck(currentIdx)}
            >
              <div className={`check-box${checked[currentIdx] ? ' checked' : ''}`}>
                {checked[currentIdx] ? '✓' : ''}
              </div>
              <span className="checklist-label">
                {item.text}
                {item.optional && (
                  <span style={{
                    marginLeft: 8,
                    fontSize: 11,
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    opacity: 0.7,
                  }}>optional</span>
                )}
              </span>
            </div>
            {item.subtext && (
              <p style={{
                fontSize: 12,
                color: 'var(--text-secondary)',
                margin: '-4px 0 8px 48px',
                lineHeight: 1.5,
                opacity: 0.7,
              }}>{item.subtext}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function Step9({ checked, toggleCheck, onNext }) {
  const compulsoryDone = checked.filter((v, i) => v && i !== OPTIONAL_INDEX).length
  const allCompulsoryDone = compulsoryDone === COMPULSORY_TOTAL

  // Calculate start indices for each group
  const groupStartIndices = []
  let running = 0
  for (const g of allGroups) {
    groupStartIndices.push(running)
    running += g.items.length
  }

  return (
    <div className="page">
      <p className="section-label">09 · YOUR FIRST ACTIONS</p>
      <h1>Do these before your first orientation.</h1>
      <p style={{ marginBottom: 16 }}>All 12 must be checked to complete. This is your first deliverable.</p>
      <div className="live-counter" style={{ marginBottom: 24 }}>
        <span>{compulsoryDone}</span> of {COMPULSORY_TOTAL} complete
      </div>

      <div className="checklist-desktop-grid">
        {/* Left column */}
        <div>
          {leftGroups.map((group, i) => (
            <ChecklistGroup
              key={group.label}
              group={group}
              startIndex={groupStartIndices[i]}
              checked={checked}
              toggleCheck={toggleCheck}
            />
          ))}
        </div>
        {/* Right column */}
        <div>
          {rightGroups.map((group, i) => (
            <ChecklistGroup
              key={group.label}
              group={group}
              startIndex={groupStartIndices[leftGroups.length + i]}
              checked={checked}
              toggleCheck={toggleCheck}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <button
          className="btn-primary"
          onClick={onNext}
          disabled={!allCompulsoryDone}
        >
          I'm ready. →
        </button>
      </div>
    </div>
  )
}
