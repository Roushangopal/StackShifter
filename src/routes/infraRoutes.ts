// src/routes/infraRoutes.ts
import express from 'express';
import { generateInfra } from '../controllers/infraController';

const router = express.Router();

router.post('/generate', generateInfra); 

export default router;
