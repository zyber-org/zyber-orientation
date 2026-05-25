import { useState } from 'react'

export default function Step0({ user, setUser, onNext }) {
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!user.name.trim()) errs.name = true
    if (!user.email.trim()) errs.email = true
    if (!user.college.trim()) errs.college = true
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    onNext()
  }

  const update = (field) => (e) => {
    setUser(prev => ({ ...prev, [field]: e.target.value }))
    setErrors(prev => ({ ...prev, [field]: false }))
  }

  return (
    <div className="page page-no-nav">
      <div className="zyber-wordmark">ZYBER</div>
      <h1>Welcome, Builder.</h1>
      <p style={{ marginBottom: 32 }}>This is your orientation. It takes 10 minutes. Do it properly.</p>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          style={errors.name ? { borderColor: 'var(--red)' } : {}}
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={update('name')}
          autoComplete="name"
        />
        <input
          className="input-field"
          style={errors.email ? { borderColor: 'var(--red)' } : {}}
          type="email"
          placeholder="Email Address"
          value={user.email}
          onChange={update('email')}
          autoComplete="email"
        />
        <input
          className="input-field"
          style={errors.college ? { borderColor: 'var(--red)' } : {}}
          type="text"
          placeholder="Your College"
          value={user.college}
          onChange={update('college')}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Your Course"
          value={user.course || ''}
          onChange={update('course')}
        />
        <div style={{ marginTop: 8 }}>
          <button type="submit" className="btn-primary">Let's go →</button>
        </div>
      </form>
    </div>
  )
}
