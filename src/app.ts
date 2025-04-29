import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import infraRoutes from './routes/infraRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/infra', infraRoutes);

export default app;
