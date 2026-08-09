import express from 'express'
import User from '../models/User.js'
import { generateToken, verifyToken } from '../middleware/auth.js'

const router = express.Router()

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body
    
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' })
    }
    
    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }
    
    const user = new User({ username, email, password })
    await user.save()
    
    const token = generateToken(user._id)
    res.status(201).json({ message: 'User registered', token, user: { id: user._id, username, email } })
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    
    const isValidPassword = await user.comparePassword(password)
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    
    const token = generateToken(user._id)
    res.json({ message: 'Login successful', token, user: { id: user._id, username: user.username, email, role: user.role } })
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message })
  }
})

// Get current user
router.get('/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    const decoded = verifyToken(token)
    
    if (!decoded) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    
    const user = await User.findById(decoded.userId).select('-password')
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message })
  }
})

export default router
