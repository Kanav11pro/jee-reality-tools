import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RealityChecks from './pages/RealityChecks'
import SpeedGames from './pages/SpeedGames'
import PlanningTools from './pages/PlanningTools'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reality-checks" element={<RealityChecks />} />
      <Route path="/speed-games" element={<SpeedGames />} />
      <Route path="/planning-tools" element={<PlanningTools />} />
    </Routes>
  )
}

export default App
