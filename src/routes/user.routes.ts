import express from 'express';
import {userController} from '../controllers/';

const router = express.Router();

// GET /api/users/:id
router.get('/:id', userController.getUser);

// POST /api/users
router.post('/', userController.addUser);

export default router;
