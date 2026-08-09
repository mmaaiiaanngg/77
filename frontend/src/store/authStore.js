import { create } from 'zustand'
import api from '../services/api'

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,

  // Check if user is logged in on mount
  checkAuth: async () => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const response = await api.get('/auth/me')
        set({ user: response.data, isAuthenticated: true })
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      localStorage.removeItem('token')
    } finally {
      set({ loading: false })
    }
  },

  // Register
  register: async (username, email, password) => {
    try {
      const response = await api.post('/auth/register', {
        username,
        email,
        password,
        confirmPassword: password
      })
      localStorage.setItem('token', response.data.token)
      set({ user: response.data.user, isAuthenticated: true })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.response?.data?.message }
    }
  },

  // Login
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password })
      localStorage.setItem('token', response.data.token)
      set({ user: response.data.user, isAuthenticated: true })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.response?.data?.message }
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, isAuthenticated: false })
  }
}))

// Check auth on app start
useAuthStore.getState().checkAuth()

export default useAuthStore
