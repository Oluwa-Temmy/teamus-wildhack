import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './hooks/auth'
import { Dashboard } from './pages/Dashboard'
import { LandingPage } from './pages/LandingPage'
import { Match } from './pages/Match'
import { Profile } from './pages/Profile'
import { Score } from './pages/ScoreInfo'
import { Cards } from './pages/CardsInfo'
import { Miles } from './pages/MilesInfo'

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
        <Route
          path="/match"
          element={
            <ProtectedRoute>
              <Match />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scores"
          element={
            <ProtectedRoute>
              <Score />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cards"
          element={
            <ProtectedRoute>
              <Cards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/miles"
          element={
            <ProtectedRoute>
              <Miles />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
