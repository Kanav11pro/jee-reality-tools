import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StudyTools from './pages/StudyTools'
import RealityChecks from './pages/RealityChecks'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<StudyTools />} />
      <Route path="/reality-checks" element={<RealityChecks />} />
    </Routes>
  )
}

export default App
