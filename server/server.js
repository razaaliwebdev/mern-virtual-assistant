import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/db.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get("/", (req, res) => {
    res.send("Hello World from the SERVER");
});


// Database Connection
connectDB()
    .then(() => {

        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Server is running on the PORT:${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Failed to connect mongoDB : ${error}`);
        process.exit(1);
    });