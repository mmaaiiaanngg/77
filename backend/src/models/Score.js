import mongoose from 'mongoose'

const scoreSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  level: Number,
  duration: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Score', scoreSchema)
