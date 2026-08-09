import { useState } from 'react'
import useAuthStore from '../store/authStore'

function Dashboard() {
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState('stats')

  const userStats = {
    totalGames: 15,
    totalScore: 12500,
    level: 8,
    rank: '#342'
  }

  const recentScores = [
    { game: 'Space Invaders', score: 2500, date: '2 hours ago' },
    { game: 'Tetris', score: 3200, date: '5 hours ago' },
    { game: 'Chess Master', score: 1800, date: '1 day ago' }
  ]

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {user?.username}! 🎮</h1>
          <p className="text-gray-400">Check your stats and recent achievements</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Games', value: userStats.totalGames, icon: '🎮' },
            { label: 'Total Score', value: userStats.totalScore.toLocaleString(), icon: '⭐' },
            { label: 'Current Level', value: userStats.level, icon: '📈' },
            { label: 'Global Rank', value: userStats.rank, icon: '🏆' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-secondary rounded-lg p-6 border border-primary border-opacity-20 hover:border-opacity-40 transition">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-secondary rounded-lg border border-primary border-opacity-20">
          <div className="flex border-b border-primary border-opacity-20">
            {['stats', 'achievements', 'friends'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 font-bold uppercase text-sm transition ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'stats' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Recent Scores</h3>
                <div className="space-y-4">
                  {recentScores.map((score, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-dark rounded-lg hover:bg-opacity-80 transition">
                      <div>
                        <p className="font-bold text-white">{score.game}</p>
                        <p className="text-sm text-gray-400">{score.date}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{score.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Achievements</h3>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((achievement) => (
                    <div key={achievement} className="bg-dark p-4 rounded-lg text-center hover:bg-primary hover:bg-opacity-20 transition cursor-pointer">
                      <div className="text-3xl mb-2">🏅</div>
                      <p className="text-xs text-gray-400">Achievement {achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'friends' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Coming Soon</h3>
                <p className="text-gray-400">Friends feature will be available soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
