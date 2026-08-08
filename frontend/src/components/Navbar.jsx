import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'

function Navbar() {
  const { user, isAuthenticated, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-secondary text-light p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          77 Gaming
        </Link>
        
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/games" className="hover:text-primary transition">Games</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link>
              {user?.role === 'admin' && (
                <Link to="/admin" className="hover:text-primary transition">Admin</Link>
              )}
              <button 
                onClick={handleLogout}
                className="bg-primary px-4 py-2 rounded hover:opacity-90"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-primary transition">Login</Link>
              <Link to="/register" className="bg-primary px-4 py-2 rounded hover:opacity-90">
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
