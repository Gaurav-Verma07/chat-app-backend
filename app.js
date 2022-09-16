import express from 'express';
import chatRouter from './routes/chatRouter.js';

const app = express();

app.use(
  express.json({
    limit: '10kb',
  }),
);

app.use('/api/v1/chat', chatRouter);

export default app;
