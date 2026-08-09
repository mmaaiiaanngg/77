function Home() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-red-700">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6">77 Gaming</h1>
          <p className="text-xl text-gray-100 mb-8">Experience the Ultimate Gaming Platform</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Play Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Space Invaders', desc: 'Classic arcade action', category: 'Action' },
              { title: 'Tetris', desc: 'Arrange falling blocks', category: 'Puzzle' },
              { title: 'Chess Master', desc: 'Strategic battles', category: 'Strategy' }
            ].map((game, idx) => (
              <div key={idx} className="bg-dark rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 cursor-pointer shadow-lg">
                <div className="w-full h-48 bg-gradient-to-br from-primary to-red-700 flex items-center justify-center">
                  <span className="text-6xl">🎮</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{game.title}</h3>
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded">{game.category}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{game.desc}</p>
                  <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-2 rounded transition">
                    Play Game →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '50K+', label: 'Active Players' },
              { num: '200+', label: 'Games' },
              { num: '1M+', label: 'Scores' },
              { num: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-secondary border border-primary border-opacity-20">
                <div className="text-4xl font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-red-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join?</h2>
          <p className="text-xl text-gray-100 mb-8">Start playing and compete with thousands of players worldwide</p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
