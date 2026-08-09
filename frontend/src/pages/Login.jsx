import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await login(email, password)
    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.error || 'Login failed')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">77 Gaming</h1>
          <p className="text-gray-400">Welcome back, player!</p>
        </div>

        {/* Login Card */}
        <div className="bg-secondary rounded-lg p-8 shadow-2xl border border-primary border-opacity-20">
          {error && (
            <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@77gaming.com"
                className="w-full px-4 py-3 bg-dark border border-primary border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-dark border border-primary border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-red-700 text-white font-bold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-dark rounded-lg border border-yellow-500 border-opacity-50">
            <p className="text-sm text-gray-400 mb-2">Demo Credentials:</p>
            <p className="text-sm text-yellow-500">📧 admin@77gaming.com</p>
            <p className="text-sm text-yellow-500">🔑 admin123456</p>
          </div>

          {/* Register Link */}
          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{' '}
            <a href="/register" className="text-primary font-bold hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
