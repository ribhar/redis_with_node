import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model';
import redisClient from '../configs/redis.config';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        // Check if user data is in Redis cache
        const data = await redisClient.get(id);
        if (data) {
            // If data exists in Redis, return data
            res.json(JSON.parse(data));
        } else {
            // If not, fetch from MongoDB and cache in Redis
            const user = await User.findById(id);
            if (user) {
                redisClient.setEx(id, 3600, JSON.stringify(user));
                res.json(user);
            } else {
                // If the user is not found, return a 404 Not Found response
                res.status(404).json({ message: 'User not found' });
            }
        }
    } catch (error) {
        console.error('Internal Server Error', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, bio, profilePicture } = req.body;
    try {
        const newUser = new User({
            name,
            email,
            bio,
            profilePicture
        });

        const savedUser = await newUser.save();
        // Invalidate the cache for this user
        redisClient.del(savedUser._id.toString());
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error while adding user', error);
        res.status(500).json({ message: 'Error while adding user' });
    }
};
