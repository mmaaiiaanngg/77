function Admin() {
  const [activeTab, setActiveTab] = useState('users')

  const users = [
    { id: 1, username: 'player', email: 'player@77gaming.com', role: 'user', joined: '2026-01-15' },
    { id: 2, username: 'admin', email: 'admin@77gaming.com', role: 'admin', joined: '2026-01-01' }
  ]

  const games = [
    { id: 1, name: 'Space Invaders', category: 'Action', rating: 4.5, players: 12500 },
    { id: 2, name: 'Tetris', category: 'Puzzle', rating: 4.8, players: 18200 }
  ]

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage users and games</p>
        </div>

        {/* Tabs */}
        <div className="bg-secondary rounded-lg border border-primary border-opacity-20 overflow-hidden">
          <div className="flex border-b border-primary border-opacity-20">
            {['users', 'games'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 font-bold uppercase text-sm transition ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary -mb-px'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Users ({users.length})</h2>
                  <button className="bg-primary text-dark px-6 py-2 rounded font-bold hover:opacity-90">
                    + Add User
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-primary border-opacity-20">
                        <th className="text-left py-3 px-4 text-gray-400">Username</th>
                        <th className="text-left py-3 px-4 text-gray-400">Email</th>
                        <th className="text-left py-3 px-4 text-gray-400">Role</th>
                        <th className="text-left py-3 px-4 text-gray-400">Joined</th>
                        <th className="text-left py-3 px-4 text-gray-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-primary border-opacity-10 hover:bg-dark hover:bg-opacity-50 transition">
                          <td className="py-3 px-4 font-bold text-white">{user.username}</td>
                          <td className="py-3 px-4 text-gray-400">{user.email}</td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 rounded text-sm ${
                              user.role === 'admin' ? 'bg-primary text-dark' : 'bg-secondary text-gray-400'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">{user.joined}</td>
                          <td className="py-3 px-4">
                            <button className="text-red-500 hover:text-red-400 font-bold">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'games' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Games ({games.length})</h2>
                  <button className="bg-primary text-dark px-6 py-2 rounded font-bold hover:opacity-90">
                    + Add Game
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {games.map((game) => (
                    <div key={game.id} className="bg-dark rounded-lg p-6 border border-primary border-opacity-20">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{game.name}</h3>
                          <p className="text-sm text-gray-400">{game.category}</p>
                        </div>
                        <span className="bg-primary text-dark px-3 py-1 rounded font-bold">⭐ {game.rating}</span>
                      </div>
                      <p className="text-gray-400 mb-4">👥 {game.players.toLocaleString()} players</p>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-primary text-dark px-4 py-2 rounded font-bold hover:opacity-90">Edit</button>
                        <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded font-bold hover:opacity-90">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
export default Admin
