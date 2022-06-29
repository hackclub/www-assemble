import { useState } from 'react'
import noselect from './noselect'

export default function AudioCheck({ children }) {
  const [audioEnabled, setAudioEnabled] = useState(false)

  if (audioEnabled) return <>{children}</>

  return (
    <div
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: '1000000',
        background: 'white',
        width: '100vw',
        height: '100vh',
        cursor: 'default',
        ...noselect,
      }}
      onClick={() => setAudioEnabled(true)}
    >
      <div
        style={{
          position: 'fixed',
          top: '50vh',
          left: '50vw',
          color: 'black',
          zIndex: '1000001',
          transform: 'translate(-50%, -50%)',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        <h1 style={{ fontFamily: 'Space Grotesk' }}>Audio Required</h1>
        <p>Click anywhere to start animation.</p>
      </div>
    </div>
  )
}
