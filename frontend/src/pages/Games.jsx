import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import api from '../services/api'

function Games() {
  const { isAuthenticated } = useAuthStore()
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    fetchGames()
  }, [filter])

  const fetchGames = async () => {
    try {
      const endpoint = filter === 'all' ? '/games' : `/games?category=${filter}`
      const response = await api.get(endpoint)
      setGames(response.data)
    } catch (error) {
      console.error('Error fetching games:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePlayGame = (gameId) => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    navigate(`/game/${gameId}`)
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Games Library</h1>

      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-primary' : 'bg-secondary'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('action')}
          className={`px-4 py-2 rounded ${filter === 'action' ? 'bg-primary' : 'bg-secondary'}`}
        >
          Action
        </button>
        <button
          onClick={() => setFilter('puzzle')}
          className={`px-4 py-2 rounded ${filter === 'puzzle' ? 'bg-primary' : 'bg-secondary'}`}
        >
          Puzzle
        </button>
        <button
          onClick={() => setFilter('strategy')}
          className={`px-4 py-2 rounded ${filter === 'strategy' ? 'bg-primary' : 'bg-secondary'}`}
        >
          Strategy
        </button>
      </div>

      {loading ? (
        <p>Loading games...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {games.map((game) => (
            <div key={game.id} className="bg-secondary p-4 rounded-lg hover:shadow-lg transition">
              <img src={game.image} alt={game.name} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-lg font-bold mb-2">{game.name}</h3>
              <p className="text-sm text-light mb-2">{game.category}</p>
              <p className="text-xs mb-4">⭐ {game.rating}/5</p>
              <button
                onClick={() => handlePlayGame(game.id)}
                className="w-full bg-primary py-2 rounded hover:opacity-90"
              >
                Play
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Games
