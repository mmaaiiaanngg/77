import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'

function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-secondary text-light p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          77 Gaming
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/games" className="hover:text-primary transition">Games</Link>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:text-primary transition">
                Dashboard
              </Link>
              {user?.role === 'admin' && (
                <Link to="/admin" className="hover:text-primary transition">
                  Admin
                </Link>
              )}
              <div className="flex gap-4">
                <span className="text-sm">Welcome, {user?.username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-4 py-2 rounded hover:opacity-90"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-primary px-4 py-2 rounded hover:opacity-90"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="border border-primary px-4 py-2 rounded hover:bg-primary hover:text-dark transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
