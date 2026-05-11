import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { env } from './config/env';
import { errorHandler } from './middleware/error.middleware';

// Routes
import contactRoutes from './routes/contact.routes';

const app = express();

app.use(cors({
  origin: env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json());

// Routes setup
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.use('/api/contact', contactRoutes);

// Global Error Handler
app.use(errorHandler);

app.listen(env.PORT, async () => {
  console.log(`Server running on port ${env.PORT}`);
  try {
    if (env.MONGODB_URI) {
      await mongoose.connect(env.MONGODB_URI);
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
});
