import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './hooks/auth'
import { Dashboard } from './pages/Dashboard'
import { LandingPage } from './pages/LandingPage'
import { Questionnaire } from './pages/Questionnaire'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
        <Route path="/questionnaire" element={<Questionnaire />}/>
      </Routes>
    </BrowserRouter>
  )
}
