export default function Step6({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">06 · YOUR STRUCTURE</p>
      <h1>You have two homes at Zyber.</h1>
      <p style={{ marginBottom: 32 }}>Two parallel tracks. Both matter. Both move at the same time.</p>

      {/* SVG Org Chart */}
      <div className="org-svg-wrap">
        <svg
          viewBox="0 0 700 420"
          width="100%"
          style={{ maxWidth: 700, overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="zyberGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated connecting lines */}
          {/* Zyber → College Hub */}
          <line x1="350" y1="52" x2="175" y2="138"
            stroke="rgba(167,139,250,0.4)" strokeWidth="1.5"
            strokeDasharray="6 4" className="org-line" />
          {/* Zyber → Task Force */}
          <line x1="350" y1="52" x2="525" y2="138"
            stroke="rgba(56,189,248,0.4)" strokeWidth="1.5"
            strokeDasharray="6 4" className="org-line" />
          {/* Task Force → divisions */}
          <line x1="525" y1="178" x2="120" y2="268"
            stroke="rgba(167,139,250,0.3)" strokeWidth="1"
            strokeDasharray="5 4" className="org-line" />
          <line x1="525" y1="178" x2="310" y2="268"
            stroke="rgba(52,211,153,0.3)" strokeWidth="1"
            strokeDasharray="5 4" className="org-line" />
          <line x1="525" y1="178" x2="500" y2="268"
            stroke="rgba(251,191,36,0.3)" strokeWidth="1"
            strokeDasharray="5 4" className="org-line" />
          <line x1="525" y1="178" x2="620" y2="268"
            stroke="rgba(56,189,248,0.3)" strokeWidth="1"
            strokeDasharray="5 4" className="org-line" />

          {/* ZYBER node */}
          <circle cx="350" cy="32" r="28" fill="url(#zyberGlow)" />
          <circle cx="350" cy="32" r="24" fill="#1a1040" stroke="#FBBF24" strokeWidth="1.5" filter="url(#glow)" />
          <text x="350" y="37" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif" letterSpacing="2">ZYBER</text>

          {/* College Hub node */}
          <rect x="95" y="138" width="160" height="40" rx="8"
            fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.5)" strokeWidth="1.2" />
          <text x="175" y="163" textAnchor="middle" fill="#A78BFA" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">🏛️ College Zyber Hub</text>

          {/* Task Force node */}
          <rect x="415" y="138" width="160" height="40" rx="8"
            fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.5)" strokeWidth="1.2" />
          <text x="495" y="163" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">⚡ Task Force</text>

          {/* Division nodes */}
          {/* Comms */}
          <rect x="40" y="268" width="160" height="36" rx="6"
            fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.35)" strokeWidth="1" />
          <text x="120" y="290" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">📣 Communications</text>
          <text x="120" y="318" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter,sans-serif">Faces · Carousel · Reels · Notifs</text>

          {/* GTM */}
          <rect x="220" y="268" width="140" height="36" rx="6"
            fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.35)" strokeWidth="1" />
          <text x="290" y="290" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">📈 GTM</text>
          <text x="290" y="318" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter,sans-serif">Campus · Community · Partners</text>

          {/* Research */}
          <rect x="370" y="268" width="150" height="36" rx="6"
            fill="rgba(251,191,36,0.1)" stroke="rgba(251,191,36,0.35)" strokeWidth="1" />
          <text x="445" y="290" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">🔬 Research</text>
          <text x="445" y="318" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter,sans-serif">Gamification · UI/UX · Connect</text>

          {/* Tech */}
          <rect x="530" y="268" width="130" height="36" rx="6"
            fill="rgba(56,189,248,0.1)" stroke="rgba(56,189,248,0.35)" strokeWidth="1" />
          <text x="595" y="290" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">💻 Tech</text>
          <text x="595" y="318" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter,sans-serif">App Dev · QA</text>
        </svg>
      </div>

      {/* Two cards */}
      <div className="twin-grid" style={{ marginBottom: 12 }}>
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
          <p>You also belong to one cross college task force organised by function. Research, GTM, Communications or Tech.</p>
          <div style={{ marginTop: 8 }}>
            {[
              'Your task force is cross college. You are building alongside people from every campus in the network.',
              'Your work feeds directly into the product. Research findings, GTM activations, content, code — it all ships.',
              'You get better at your function fast because you are doing real work, not simulated projects.',
            ].map((h, i) => (
              <div className="highlight-block" key={i} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 13 }}>{h}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: 13, textAlign: 'center', margin: '8px 0 16px' }}>
        Your College Zyber Hub is your home base. Your Task Force is where you build.
      </p>

      <p style={{ color: 'var(--accent)', margin: '0 0 32px' }}>The structure is flat. If you have something to say, say it to the right person and say it directly.</p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
