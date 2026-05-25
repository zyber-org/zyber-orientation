const useWords = ['real', 'now', 'together', 'build', 'move', 'people', 'collective', 'find', 'free', 'show up']

export default function Step4({ onNext }) {
  return (
    <div className="page">
      <p className="section-label">04 · THE BRAND</p>
      <h1>How we speak. How we show up.</h1>
      <p style={{ marginBottom: 28 }}>Every piece of content, every caption, every notification that goes out carries the Zyber voice. We need to get this right from day one.</p>

      <div className="card">
        <h3>Zyber is a movement, not a product.</h3>
        <p>Products get downloaded. Movements get built. There is a difference between something people use and something people believe in. We are building the second thing.</p>
        <p>Every college we enter, every community we activate, every connection that happens on Zyber adds to something larger than the app itself. We are changing how a generation finds its people. That does not happen through a marketing campaign. It happens because the people building it genuinely mean it.</p>
        <p>When you post about Zyber, show up for an activation or bring a friend onto the app, you are not doing a task. You are adding to the movement. That distinction matters. People can tell the difference between someone who believes in something and someone who is just executing a brief.</p>
        <p style={{ color: 'var(--accent)', marginBottom: 0 }}>Where you are from should never limit how far you go. That is what we are building towards. Keep that in the room when you work.</p>
      </div>

      <div className="card">
        <h3>Write like a brilliant peer</h3>
        <p>Not a brand. Not a corporate. A sharp, warm, direct person who happens to know a lot. Short sentences. Active voice. Present tense. Say the thing. Skip the preamble.</p>
      </div>

      <div className="card">
        <h3>Always use</h3>
        <p style={{ marginBottom: 10 }}>These words live in our world.</p>
        <div>
          {useWords.map(w => (
            <span key={w} className="pill pill-green">{w}</span>
          ))}
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: 13, fontStyle: 'italic', marginBottom: 32 }}>
        When in doubt, read it out loud. If it sounds like something a real person would say to a friend, it is right. If it sounds like a pitch deck, rewrite it.
      </p>

      <button className="btn-primary" onClick={onNext}>Continue →</button>
    </div>
  )
}
