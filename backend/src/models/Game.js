import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    enum: ['action', 'puzzle', 'strategy', 'adventure'],
    required: true
  },
  image: String,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Game', gameSchema)
