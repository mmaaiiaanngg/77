import { create } from 'zustand'
import api from '../services/api'

const useAuthStore = create((set) => (({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email, password) => {
    set({ isLoading: true })
    try {
      const response = await api.post('/auth/login', { email, password })
      localStorage.setItem('token', response.data.token)
      set({ user: response.data.user, isAuthenticated: true })
      return response.data
    } catch (error) {
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  register: async (userData) => {
    set({ isLoading: true })
    try {
      const response = await api.post('/auth/register', userData)
      localStorage.setItem('token', response.data.token)
      set({ user: response.data.user, isAuthenticated: true })
      return response.data
    } catch (error) {
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, isAuthenticated: false })
  },
})))

export default useAuthStore
