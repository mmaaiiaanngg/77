import express from 'express'
import User from '../models/User.js'
import Game from '../models/Game.js'
import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()

// Get all users (admin only)
router.get('/users', authMiddleware, async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message })
  }
})

// Delete user (admin only)
router.delete('/users/:id', authMiddleware, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message })
  }
})

// Get all games (admin only)
router.get('/games', authMiddleware, async (req, res) => {
  try {
    const games = await Game.find()
    res.json(games)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching games', error: error.message })
  }
})

// Create game (admin only)
router.post('/games', authMiddleware, async (req, res) => {
  try {
    const { name, description, category, image, rating } = req.body
    
    const game = new Game({
      name,
      description,
      category,
      image,
      rating
    })
    
    await game.save()
    res.status(201).json({ message: 'Game created', game })
  } catch (error) {
    res.status(500).json({ message: 'Error creating game', error: error.message })
  }
})

// Delete game (admin only)
router.delete('/games/:id', authMiddleware, async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id)
    res.json({ message: 'Game deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting game', error: error.message })
  }
})

export default router
