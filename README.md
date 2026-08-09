# 77 Gaming Platform

A full-stack gaming platform where users can play various games, track scores, and compete with others.

## Features

✨ **User Authentication** - Register and login system with JWT
🎮 **Game Library** - Browse and play different games by category
🏆 **Score Tracking** - Save and view your game scores
👨‍💼 **Admin Panel** - Manage users and games (admin only)
📊 **Leaderboards** - View top scores for each game
🎨 **Modern UI** - Beautiful dark theme with responsive design

## Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Routing
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Project Structure

```
77-gaming/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── pages/           # Page components
│   │   ├── components/      # Reusable components
│   │   ├── services/        # API services
│   │   ├── store/           # Zustand stores
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                  # Express backend
│   ├── src/
│   │   ├── models/          # Mongoose models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── server.js        # Entry point
│   ├── seed.js              # Database seeding
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB running locally or MongoDB Atlas connection string

### Installation

**Backend Setup:**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
node seed.js  # Seed initial data
npm run dev
```

**Frontend Setup:**
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The frontend will be available at `http://localhost:3000`
The backend will be available at `http://localhost:5000`

## Default Credentials

After seeding:
- **Admin** - admin@77gaming.com / admin123456
- **Player** - player@77gaming.com / player123456

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)

### Games
- `GET /api/games` - Get all games (with category filter)
- `GET /api/games/:id` - Get single game
- `POST /api/games/:id/score` - Save game score (requires auth)
- `GET /api/games/:id/scores` - Get top scores for game

### Admin
- `GET /api/admin/users` - Get all users (admin only)
- `DELETE /api/admin/users/:id` - Delete user (admin only)
- `GET /api/admin/games` - Get all games (admin only)
- `POST /api/admin/games` - Create game (admin only)
- `DELETE /api/admin/games/:id` - Delete game (admin only)

## Future Enhancements

- [ ] Real game implementations
- [ ] WebSocket for real-time multiplayer
- [ ] Payment integration
- [ ] Social features (friends, chat)
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] Game streaming integration

## License

MIT

## Author

Created with ❤️ for gaming enthusiasts
