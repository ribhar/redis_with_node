import express, { Request, Response } from 'express';
import config from './configs/config'
import router from './routes';
import connectDB from './configs/db.config';
import redisClient from './configs/redis.config';
// Initialize Express app
const app = express();
// Middleware
app.use(express.json());
// Routes
app.use('/api/', router);

// connect to db
connectDB()

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
