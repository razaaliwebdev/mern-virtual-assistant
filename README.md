# MERN-Jarvis: AI Voice Assistant

A powerful AI voice assistant built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that leverages Google's Gemini API for natural language processing and voice interactions.

## 🚀 Features

- Voice-based interaction with AI assistant
- Real-time speech-to-text and text-to-speech conversion
- Powered by Google's Gemini API for advanced AI capabilities
- Modern and responsive user interface
- Secure API key management
- Real-time communication between client and server

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

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- Google Gemini API key
- Git

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
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

5. Create a `.env` file in the client directory:

```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Running the Application

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

The application will be available at `http://localhost:5173`

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
    │   ├── controllers/ # Route controllers
    │   ├── models/      # Database models
    │   ├── routes/      # API routes
    │   └── utils/       # Utility functions
    └── server.js        # Entry point
```

## 🔐 Environment Variables

### Server (.env)

- `MONGODB_URI`: MongoDB connection string
- `GEMINI_API_KEY`: Google Gemini API key
- `PORT`: Server port number (default: 5000)

### Client (.env)

- `VITE_API_URL`: Backend API URL

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
