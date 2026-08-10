function GameCard({ game, onClick }) {
  const {
    name = 'Unknown Game',
    emoji = '🎮',
    category = 'General',
    rating = 0,
    players = 0,
  } = game || {}

  return (
    <div
      className="bg-secondary rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 shadow-lg"
    >
      <div className="h-36 bg-dark flex items-center justify-center text-6xl">
        {emoji}
      </div>
      <div className="p-4">
        <h3 className="text-light font-bold text-lg mb-1 truncate">{name}</h3>
        <span className="text-xs text-primary font-semibold uppercase tracking-wide">
          {category}
        </span>
        <div className="flex items-center justify-between mt-3 text-sm text-gray-400">
          <span>⭐ {typeof rating === 'number' ? rating.toFixed(1) : rating}</span>
          <span>👥 {players.toLocaleString()}</span>
        </div>
        <button
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition cursor-pointer"
          onClick={() => onClick && onClick(game)}
        >
          Play Now
        </button>
      </div>
    </div>
  )
}

export default GameCard
