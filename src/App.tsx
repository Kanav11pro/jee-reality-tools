import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StudyTools from './pages/StudyTools'
import RealityChecks from './pages/RealityChecks'
import AIFiestaPage from './pages/AIFiestaPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<StudyTools />} />
      <Route path="/reality-checks" element={<RealityChecks />} />
      <Route path="/ai-fiesta" element={<AIFiestaPage />} />
    </Routes>
  )
}

export default App
