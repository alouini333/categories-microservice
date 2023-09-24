import express from 'express';
import cors from 'cors';
import categoryRoutes from './src/routes/categoryRoutes';

const app = express();

app.use(cors());

app.get('/health', (req, res) => {
  res.json({ info: 'App is running!' });
});

app.use('/', categoryRoutes);

export default app;
