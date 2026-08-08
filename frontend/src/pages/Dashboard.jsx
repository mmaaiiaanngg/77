import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import api from '../services/api'

function Dashboard() {
  const { user, isAuthenticated } = useAuthStore()
  const [userStats, setUserStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    fetchUserStats()
  }, [isAuthenticated, navigate])

  const fetchUserStats = async () => {
    try {
      const response = await api.get('/users/stats')
      setUserStats(response.data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="container mx-auto py-12">Loading...</div>

  return (
    <div className="container mx-auto py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user?.username}!</h1>
        <p className="text-light">Email: {user?.email}</p>
      </div>

      {userStats && (
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-primary font-bold mb-2">Games Played</h3>
            <p className="text-3xl font-bold">{userStats.gamesPlayed}</p>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-primary font-bold mb-2">Total Points</h3>
            <p className="text-3xl font-bold">{userStats.totalPoints}</p>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-primary font-bold mb-2">Achievements</h3>
            <p className="text-3xl font-bold">{userStats.achievements}</p>
          </div>
        </div>
      )}

      <div className="bg-secondary p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <p className="text-light">No recent activity</p>
      </div>
    </div>
  )
}

export default Dashboard
