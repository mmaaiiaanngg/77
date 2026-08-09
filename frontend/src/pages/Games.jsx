function Games() {
  const games = [
    { id: 1, name: 'Space Invaders', category: 'Action', rating: 4.5, players: '12.5K' },
    { id: 2, name: 'Tetris', category: 'Puzzle', rating: 4.8, players: '18.2K' },
    { id: 3, name: 'Chess Master', category: 'Strategy', rating: 4.6, players: '8.9K' },
    { id: 4, name: 'Adventure Quest', category: 'Adventure', rating: 4.7, players: '15.3K' },
    { id: 5, name: 'Puzzle Blitz', category: 'Puzzle', rating: 4.4, players: '9.7K' },
    { id: 6, name: 'Action Heroes', category: 'Action', rating: 4.9, players: '22.1K' }
  ]

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Browse Games</h1>
          <div className="flex gap-4 flex-wrap">
            {['All', 'Action', 'Puzzle', 'Strategy', 'Adventure'].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-dark transition font-bold"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 shadow-lg border border-primary border-opacity-10">
              {/* Game Image */}
              <div className="w-full h-40 bg-gradient-to-br from-primary to-red-700 flex items-center justify-center">
                <span className="text-5xl">🎮</span>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{game.name}</h3>
                    <p className="text-sm text-gray-400">{game.category}</p>
                  </div>
                  <span className="bg-primary text-dark px-3 py-1 rounded font-bold text-sm">⭐ {game.rating}</span>
                </div>

                <div className="mb-4 text-sm text-gray-400">
                  👥 {game.players} playing now
                </div>

                <button className="w-full bg-gradient-to-r from-primary to-red-700 text-white font-bold py-2 rounded hover:opacity-90 transition">
                  Play Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Games
