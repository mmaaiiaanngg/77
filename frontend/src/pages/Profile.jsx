import useAuthStore from '../store/authStore'

function Profile() {
  const { user } = useAuthStore()

  const stats = {
    gamesPlayed: user?.gamesPlayed ?? 0,
    totalScore: user?.totalScore ?? 0,
    level: user?.level ?? 1,
    rank: user?.rank ?? 'Bronze',
  }

  const achievements = [
    { emoji: '🏆', title: 'First Win', desc: 'Win your first game' },
    { emoji: '⭐', title: 'High Scorer', desc: 'Score 10,000+ points' },
    { emoji: '🎮', title: 'Game Addict', desc: 'Play 50 games' },
  ]

  return (
    <div className="min-h-screen bg-dark text-light py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Avatar & Info */}
        <div className="bg-secondary rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-5xl">
            👤
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold">{user?.username ?? 'Player'}</h1>
            <p className="text-gray-400 mt-1">{user?.email ?? 'player@77gaming.com'}</p>
            <p className="text-sm text-gray-500 mt-1">
              Joined: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Games Played', value: stats.gamesPlayed, emoji: '🎮' },
            { label: 'Total Score', value: stats.totalScore.toLocaleString(), emoji: '⭐' },
            { label: 'Level', value: stats.level, emoji: '📈' },
            { label: 'Rank', value: stats.rank, emoji: '🏅' },
          ].map(({ label, value, emoji }) => (
            <div key={label} className="bg-secondary rounded-xl p-5 text-center">
              <div className="text-3xl">{emoji}</div>
              <div className="text-2xl font-bold text-primary mt-2">{value}</div>
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Edit Profile */}
        <div className="bg-secondary rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
          <div className="flex flex-wrap gap-3">
            <button className="bg-primary px-5 py-2 rounded-lg hover:opacity-90 transition">
              ✏️ Edit Username
            </button>
            <button className="border border-primary px-5 py-2 rounded-lg hover:bg-primary transition">
              🖼️ Change Avatar
            </button>
          </div>
        </div>

        {/* Account Security */}
        <div className="bg-secondary rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Account Security</h2>
          <div className="flex flex-wrap gap-3">
            <button className="border border-gray-600 px-5 py-2 rounded-lg hover:border-primary transition">
              🔑 Change Password
            </button>
            <button className="border border-gray-600 px-5 py-2 rounded-lg hover:border-primary transition">
              📧 Change Email
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-secondary rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
          <div className="space-y-3">
            {achievements.map(({ emoji, title, desc }) => (
              <div key={title} className="flex items-center gap-4 bg-dark rounded-xl p-4">
                <span className="text-3xl">{emoji}</span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
