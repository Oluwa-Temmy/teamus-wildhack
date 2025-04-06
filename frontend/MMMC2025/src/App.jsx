import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './hooks/auth'
import { Dashboard } from './pages/Dashboard'
import { LandingPage } from './pages/LandingPage'

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
      </Routes>
    </BrowserRouter>
  )
}
