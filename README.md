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

## 📡 API Documentation

### Authentication Endpoints

#### Register User

```http
POST /api/user/register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### Login User

```http
POST /api/user/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}
```

### AI Endpoints

#### Send Message

```http
POST /api/ai/chat
Authorization: Bearer <token>
Content-Type: application/json

{
  "message": "string",
  "context": "string" // optional
}
```

#### Process Voice

```http
POST /api/ai/voice
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "audio": "file",
  "format": "string" // wav, mp3, etc.
}
```

## 📊 Database Schema

### User Model

```javascript
{
  username: String,
  email: String,
  password: String,
  role: String,
  createdAt: Date,
  lastLogin: Date
}
```

### Conversation Model

```javascript
{
  userId: ObjectId,
  messages: [{
    role: String,
    content: String,
    timestamp: Date
  }],
  context: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Security Implementation

### Authentication Flow

1. User registration with password hashing
2. JWT token generation on login
3. Token validation middleware
4. Refresh token mechanism
5. Password reset functionality

### Rate Limiting

```javascript
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later",
};
```

### CORS Configuration

```javascript
const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
```

## 🐛 Error Handling

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string",
    "details": "object" // optional
  }
}
```

### Common Error Codes

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 429: Too Many Requests
- 500: Internal Server Error

## 📊 Logging Implementation

### Winston Logger Configuration

```javascript
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});
```

## 🧪 Testing Strategy

### Unit Tests

- Controller tests
- Service layer tests
- Utility function tests
- Model validation tests

### Integration Tests

- API endpoint tests
- Authentication flow tests
- Database interaction tests
- Error handling tests

### Test Coverage

- Minimum 80% code coverage
- Critical path 100% coverage
- Regular coverage reports

## 🚢 Deployment Checklist

### Pre-deployment

1. Environment variables configuration
2. Database backup
3. SSL certificate setup
4. Domain configuration
5. CI/CD pipeline verification

### Deployment Steps

1. Build client application
2. Run database migrations
3. Deploy server application
4. Configure reverse proxy
5. Enable monitoring
6. Run smoke tests

### Post-deployment

1. Monitor application logs
2. Check error rates
3. Verify API endpoints
4. Test authentication flow
5. Monitor performance metrics

## 📈 Performance Optimization

### Server-side

- Response compression
- Caching strategies
- Database indexing
- Query optimization
- Connection pooling

### Client-side

- Code splitting
- Asset optimization
- Lazy loading
- Service worker implementation
- Browser caching

## 🔄 Maintenance

### Regular Tasks

- Log rotation
- Database backup
- Security updates
- Dependency updates
- Performance monitoring

### Monitoring

- Server health checks
- API response times
- Error rates
- Resource usage
- User activity

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
