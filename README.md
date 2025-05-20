# MERN-Jarvis: AI Voice Assistant

A powerful AI voice assistant built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that leverages Google's Gemini API for natural language processing and voice interactions.

## 🚀 Features

- Voice-based interaction with AI assistant
- Real-time speech-to-text and text-to-speech conversion
- Powered by Google's Gemini API for advanced AI capabilities
- Modern and responsive user interface
- Secure API key management
- Real-time communication between client and server
- RESTful API architecture
- Secure environment variable management
- Error handling and logging
- CORS enabled for cross-origin requests
- WebSocket support for real-time updates
- Rate limiting and request throttling
- API documentation with Swagger/OpenAPI

## 🛠️ Tech Stack

### Frontend

- React.js with Vite
- Modern JavaScript (ES6+)
- TailwindCSS for styling
- Web Speech API for voice interactions

### Backend

- Node.js
- Express.js
- MongoDB for data persistence
- Google Gemini API integration
- dotenv for environment variables
- cors for cross-origin resource sharing
- express-validator for request validation
- mongoose for MongoDB object modeling
- jsonwebtoken for authentication
- bcryptjs for password hashing
- winston for logging
- helmet for security headers
- express-rate-limit for rate limiting
- socket.io for real-time communication

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- Google Gemini API key
- Git
- npm or yarn package manager
- MongoDB Compass (optional, for database management)
- Postman (optional, for API testing)

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Mern-Jarvis.git
cd Mern-Jarvis
```

2. Install server dependencies:

```bash
cd server
npm install
```

3. Install client dependencies:

```bash
cd ../client
npm install
```

4. Create a `.env` file in the server directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# API Keys
GEMINI_API_KEY=your_gemini_api_key

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=24h

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100

# Logging
LOG_LEVEL=debug
```

5. Create a `.env` file in the client directory:

```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Running the Application

### Development Mode

1. Start the server:

```bash
cd server
npm run dev
```

2. Start the client:

```bash
cd client
npm run dev
```

### Production Mode

1. Build the client:

```bash
cd client
npm run build
```

2. Start the server in production mode:

```bash
cd server
npm start
```

The application will be available at `http://localhost:5173` in development and `http://localhost:5000` in production.

## 📁 Project Structure

```
Mern-Jarvis/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── utils/        # Utility functions
│   └── public/           # Static assets
│
└── server/               # Backend Node.js application
    ├── src/
    │   ├── config/      # Configuration files
    │   │   ├── database.js    # Database configuration
    │   │   └── logger.js      # Logger configuration
    │   ├── controllers/ # Route controllers
    │   │   ├── aiController.js    # AI interaction logic
    │   │   └── userController.js  # User management
    │   ├── models/      # Database models
    │   │   ├── User.js           # User schema
    │   │   └── Conversation.js   # Chat history schema
    │   ├── routes/      # API routes
    │   │   ├── ai.js             # AI endpoints
    │   │   └── user.js           # User endpoints
    │   ├── middleware/  # Custom middleware
    │   │   ├── auth.js           # Authentication
    │   │   ├── error.js          # Error handling
    │   │   └── rateLimiter.js    # Rate limiting
    │   ├── services/    # Business logic
    │   │   ├── aiService.js      # AI service
    │   │   └── userService.js    # User service
    │   └── utils/       # Utility functions
    │       ├── logger.js         # Logging utility
    │       ├── validators.js     # Input validation
    │       └── helpers.js        # Helper functions
    ├── tests/           # Test files
    │   ├── unit/       # Unit tests
    │   └── integration/# Integration tests
    ├── server.js        # Entry point
    └── package.json     # Dependencies and scripts
```

## 🔐 Environment Variables

### Server (.env)

- `PORT`: Server port number (default: 5000)
- `NODE_ENV`: Environment (development/production)
- `MONGODB_URI`: MongoDB connection string
- `GEMINI_API_KEY`: Google Gemini API key
- `JWT_SECRET`: Secret for JWT token generation
- `JWT_EXPIRE`: JWT token expiration time
- `RATE_LIMIT_WINDOW_MS`: Rate limiting window in milliseconds
- `RATE_LIMIT_MAX`: Maximum requests per window
- `LOG_LEVEL`: Logging level (debug/info/warn/error)

### Client (.env)

- `VITE_API_URL`: Backend API URL

## 📡 API Endpoints

### AI Endpoints

- `POST /api/ai/chat`: Send message to AI
- `POST /api/ai/voice`: Process voice input
- `GET /api/ai/history`: Get chat history
- `DELETE /api/ai/history/:id`: Delete specific chat history
- `GET /api/ai/status`: Get AI service status

### User Endpoints

- `POST /api/user/register`: Register new user
- `POST /api/user/login`: User login
- `GET /api/user/profile`: Get user profile
- `PUT /api/user/profile`: Update user profile
- `DELETE /api/user/profile`: Delete user account
- `POST /api/user/refresh-token`: Refresh JWT token

## 🔒 Security Features

- Environment variable protection
- CORS configuration
- Input validation
- Error handling middleware
- Secure API key storage
- Request rate limiting
- JWT authentication
- Password hashing with bcrypt
- Helmet security headers
- XSS protection
- SQL injection prevention
- Request sanitization

## 🐛 Error Handling

The server implements comprehensive error handling:

- Custom error middleware
- Structured error responses
- Logging system for debugging
- Input validation errors
- API error responses
- Global error handler
- Development/Production error formatting
- Error tracking and monitoring

## 📊 Logging

The application uses Winston for logging with the following features:

- Multiple log levels (debug, info, warn, error)
- Log rotation
- Console and file logging
- Request logging middleware
- Error logging
- Performance monitoring
- Audit logging

## 🧪 Testing

The server includes comprehensive testing:

- Unit tests with Jest
- Integration tests
- API endpoint testing
- Mock services
- Test coverage reporting
- CI/CD integration

## 🚢 Deployment

### Local Deployment

1. Build the client:

```bash
cd client
npm run build
```

2. Start the server:

```bash
cd server
npm start
```

### Production Deployment

1. Set up environment variables
2. Build the client
3. Configure PM2 or similar process manager
4. Set up Nginx reverse proxy
5. Configure SSL certificates
6. Set up monitoring and logging

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Raza A - Initial work

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- MERN stack community
- All contributors who have helped shape this project
