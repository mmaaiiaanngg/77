import { useState, useEffect } from 'react'

function Toggle({ enabled, onChange, label }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
      <span className="text-gray-300">{label}</span>
      <button
        onClick={() => onChange(!enabled)}
        className={`w-12 h-6 rounded-full transition-colors duration-200 ${
          enabled ? 'bg-primary' : 'bg-gray-600'
        } relative`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
            enabled ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

function Settings() {
  const [privacy, setPrivacy] = useState({ publicProfile: true, showScore: true })
  const [notifications, setNotifications] = useState({ email: true, gameAlerts: false })
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !darkMode)
  }, [darkMode])

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // TODO: call delete account API
      alert('Account deletion requested.')
    }
  }

  return (
    <div className="min-h-screen bg-dark text-light py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold">⚙️ Settings</h1>

        {/* Account Settings */}
        <div className="bg-secondary rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-5">Account Settings</h2>
          <div className="flex flex-wrap gap-3">
            <button className="border border-gray-600 px-5 py-2 rounded-lg hover:border-primary transition">
              📧 Change Email
            </button>
            <button className="border border-gray-600 px-5 py-2 rounded-lg hover:border-primary transition">
              🔑 Change Password
            </button>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-secondary rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Privacy Settings</h2>
          <Toggle
            label="Public Profile"
            enabled={privacy.publicProfile}
            onChange={(v) => setPrivacy((p) => ({ ...p, publicProfile: v }))}
          />
          <Toggle
            label="Show Score on Leaderboard"
            enabled={privacy.showScore}
            onChange={(v) => setPrivacy((p) => ({ ...p, showScore: v }))}
          />
        </div>

        {/* Notification Settings */}
        <div className="bg-secondary rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
          <Toggle
            label="Email Notifications"
            enabled={notifications.email}
            onChange={(v) => setNotifications((n) => ({ ...n, email: v }))}
          />
          <Toggle
            label="Game Alerts"
            enabled={notifications.gameAlerts}
            onChange={(v) => setNotifications((n) => ({ ...n, gameAlerts: v }))}
          />
        </div>

        {/* Theme Settings */}
        <div className="bg-secondary rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Theme Settings</h2>
          <Toggle
            label="Dark Mode"
            enabled={darkMode}
            onChange={setDarkMode}
          />
        </div>

        {/* Danger Zone */}
        <div className="bg-secondary rounded-2xl p-6 border border-red-700">
          <h2 className="text-xl font-bold mb-5 text-red-500">⚠️ Danger Zone</h2>
          <div className="flex flex-wrap gap-3">
            <button className="border border-red-600 text-red-400 px-5 py-2 rounded-lg hover:bg-red-700 hover:text-white transition">
              🔓 Logout All Sessions
            </button>
            <button className="bg-red-700 text-white px-5 py-2 rounded-lg hover:bg-red-800 transition" onClick={handleDeleteAccount}>
              🗑️ Delete Account
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings
