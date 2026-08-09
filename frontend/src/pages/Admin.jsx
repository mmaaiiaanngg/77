import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import api from '../services/api'

function Admin() {
  const { user, isAuthenticated } = useAuthStore()
  const [users, setUsers] = useState([])
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('users')
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      navigate('/dashboard')
      return
    }
    fetchAdminData()
  }, [isAuthenticated, user, navigate])

  const fetchAdminData = async () => {
    try {
      const [usersRes, gamesRes] = await Promise.all([
        api.get('/admin/users'),
        api.get('/admin/games')
      ])
      setUsers(usersRes.data)
      setGames(gamesRes.data)
    } catch (error) {
      console.error('Error fetching admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await api.delete(`/admin/users/${userId}`)
        setUsers(users.filter(u => u.id !== userId))
      } catch (error) {
        console.error('Error deleting user:', error)
      }
    }
  }

  const handleDeleteGame = async (gameId) => {
    if (window.confirm('Are you sure you want to delete this game?')) {
      try {
        await api.delete(`/admin/games/${gameId}`)
        setGames(games.filter(g => g.id !== gameId))
      } catch (error) {
        console.error('Error deleting game:', error)
      }
    }
  }

  if (loading) return <div className="container mx-auto py-12">Loading...</div>

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 rounded ${activeTab === 'users' ? 'bg-primary' : 'bg-secondary'}`}
        >
          Users ({users.length})
        </button>
        <button
          onClick={() => setActiveTab('games')}
          className={`px-4 py-2 rounded ${activeTab === 'games' ? 'bg-primary' : 'bg-secondary'}`}
        >
          Games ({games.length})
        </button>
      </div>

      {activeTab === 'users' && (
        <div className="bg-secondary rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-primary">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Username</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-t border-light">
                  <td className="p-4">{user.id}</td>
                  <td className="p-4">{user.username}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-600 px-3 py-1 rounded hover:opacity-90"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'games' && (
        <div className="bg-secondary rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-primary">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Rating</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {games.map(game => (
                <tr key={game.id} className="border-t border-light">
                  <td className="p-4">{game.id}</td>
                  <td className="p-4">{game.name}</td>
                  <td className="p-4">{game.category}</td>
                  <td className="p-4">⭐ {game.rating}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDeleteGame(game.id)}
                      className="bg-red-600 px-3 py-1 rounded hover:opacity-90"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Admin
