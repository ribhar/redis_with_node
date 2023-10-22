// src/config/mongo.config.ts
import mongoose from 'mongoose';
import config from './config';

const connectDB = async () => {
    const mongoURI = config.db.dbURI;

    if (!mongoURI) {
        console.error('MongoDB URI not found in environment variables.');
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;

