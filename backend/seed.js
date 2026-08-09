import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './src/models/User.js'
import Game from './src/models/Game.js'
import Score from './src/models/Score.js'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/77gaming'

const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

    // Clear existing data
    await User.deleteMany({})
    await Game.deleteMany({})
    await Score.deleteMany({})

    // Create users
    const adminUser = await User.create({
      username: 'admin',
      email: 'admin@77gaming.com',
      password: 'admin123456',
      role: 'admin'
    })

    const regularUser = await User.create({
      username: 'player',
      email: 'player@77gaming.com',
      password: 'player123456',
      role: 'user'
    })

    console.log('✓ Users created')

    // Create games
    const games = await Game.insertMany([
      {
        name: 'Space Invaders',
        description: 'Classic arcade action game',
        category: 'action',
        image: 'https://via.placeholder.com/300x200?text=Space+Invaders',
        rating: 4.5
      },
      {
        name: 'Tetris',
        description: 'Arrange falling blocks puzzle',
        category: 'puzzle',
        image: 'https://via.placeholder.com/300x200?text=Tetris',
        rating: 4.8
      },
      {
        name: 'Chess Master',
        description: 'Strategic chess game',
        category: 'strategy',
        image: 'https://via.placeholder.com/300x200?text=Chess+Master',
        rating: 4.6
      },
      {
        name: 'Adventure Quest',
        description: 'Epic adventure exploration',
        category: 'adventure',
        image: 'https://via.placeholder.com/300x200?text=Adventure+Quest',
        rating: 4.7
      },
      {
        name: 'Puzzle Blitz',
        description: 'Fast-paced puzzle challenges',
        category: 'puzzle',
        image: 'https://via.placeholder.com/300x200?text=Puzzle+Blitz',
        rating: 4.4
      },
      {
        name: 'Action Heroes',
        description: 'Battle royale action',
        category: 'action',
        image: 'https://via.placeholder.com/300x200?text=Action+Heroes',
        rating: 4.9
      }
    ])

    console.log('✓ Games created')

    // Create scores
    await Score.insertMany([
      {
        user: regularUser._id,
        game: games[0]._id,
        score: 1500,
        level: 5,
        duration: 1200
      },
      {
        user: regularUser._id,
        game: games[1]._id,
        score: 2800,
        level: 8,
        duration: 900
      },
      {
        user: adminUser._id,
        game: games[2]._id,
        score: 3200,
        level: 10,
        duration: 1500
      }
    ])

    console.log('✓ Scores created')
    console.log('\n✓ Database seeded successfully!')

    await mongoose.connection.close()
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedData()
