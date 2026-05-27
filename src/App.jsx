import { useState } from 'react'
import './index.css'
import Step0 from './steps/Step0'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'
import Step5 from './steps/Step5'
import Step6 from './steps/Step6'
import Step7 from './steps/Step7'
import Step8 from './steps/Step8'
import Step9 from './steps/Step9'
import Step10 from './steps/Step10'

const TOTAL_STEPS = 10

export default function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [user, setUser] = useState({ name: '', college: '', course: '' })
  const [checked, setChecked] = useState(Array(13).fill(false))

  const next = () => setCurrentStep(s => Math.min(s + 1, TOTAL_STEPS))
  const back = () => setCurrentStep(s => Math.max(s - 1, 0))

  const toggleCheck = (i) => {
    setChecked(prev => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const showNav = currentStep >= 1 && currentStep <= 9
  const progress = (currentStep / TOTAL_STEPS) * 100

  const steps = [
    <Step0 key={0} user={user} setUser={setUser} onNext={next} />,
    <Step1 key={1} onNext={next} />,
    <Step2 key={2} onNext={next} />,
    <Step3 key={3} onNext={next} />,
    <Step4 key={4} onNext={next} />,
    <Step5 key={5} onNext={next} />,
    <Step6 key={6} onNext={next} />,
    <Step7 key={7} onNext={next} />,
    <Step8 key={8} onNext={next} />,
    <Step9 key={9} checked={checked} toggleCheck={toggleCheck} onNext={next} />,
    <Step10 key={10} user={user} />,
  ]

  return (
    <>
      {showNav && (
        <>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <nav className="top-nav">
            <button className="back-btn" onClick={back} aria-label="Back">←</button>
            <span className="step-counter">{currentStep} of {TOTAL_STEPS - 1}</span>
          </nav>
        </>
      )}
      {steps[currentStep]}
    </>
  )
}
