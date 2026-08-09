import express from 'express'
import Game from '../models/Game.js'
import Score from '../models/Score.js'
import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()

// Get all games
router.get('/', async (req, res) => {
  try {
    const { category } = req.query
    const filter = category ? { category } : {}
    const games = await Game.find(filter)
    res.json(games)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching games', error: error.message })
  }
})

// Get single game
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id)
    if (!game) {
      return res.status(404).json({ message: 'Game not found' })
    }
    res.json(game)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching game', error: error.message })
  }
})

// Save score
router.post('/:id/score', authMiddleware, async (req, res) => {
  try {
    const { score, level, duration } = req.body
    
    const newScore = new Score({
      user: req.userId,
      game: req.params.id,
      score,
      level,
      duration
    })
    
    await newScore.save()
    res.status(201).json({ message: 'Score saved', score: newScore })
  } catch (error) {
    res.status(500).json({ message: 'Error saving score', error: error.message })
  }
})

// Get top scores
router.get('/:id/scores', async (req, res) => {
  try {
    const scores = await Score.find({ game: req.params.id })
      .populate('user', 'username')
      .sort({ score: -1 })
      .limit(10)
    res.json(scores)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scores', error: error.message })
  }
})

export default router
