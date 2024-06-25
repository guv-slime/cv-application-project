import React from 'react'
import ReactDOM from 'react-dom/client'
import General from '/src/components/General.jsx'
import Work from '/src/components/Work.jsx'
import Education from '/src/components/Education.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className="text-5xl font-mono uppercase font-bold text-white text-center">My React CV App</h1>
    <General />
    <Work />
    <Education />
  </React.StrictMode>,
)
