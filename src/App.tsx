import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StudyTools from './pages/StudyTools'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<StudyTools />} />
    </Routes>
  )
}

export default App

