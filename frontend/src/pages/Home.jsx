import { useState, useEffect } from 'react'
import api from '../services/api'

function Home() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    try {
      const response = await api.get('/games/featured')
      setGames(response.data)
    } catch (error) {
      console.error('Error fetching games:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4">Welcome to 77 Gaming</h1>
        <p className="text-xl text-light">Your ultimate gaming destination</p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Games</h2>
        {loading ? (
          <p>Loading games...</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {games.map((game) => (
              <div key={game.id} className="bg-secondary p-4 rounded-lg hover:shadow-lg transition">
                <img src={game.image} alt={game.name} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <p className="text-sm mb-4">{game.description}</p>
                <button className="bg-primary w-full py-2 rounded hover:opacity-90">Play Now</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
