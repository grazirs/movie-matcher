// src/routes/userRoutes.ts

import express from 'express';
import { createSessionController } from '../controllers/sessionsControllers';

const router = express.Router();

// Create a new session and return two 
// session tokens
router.post('/', createSessionController)




export default router;

