import express from 'express';
import chatRouter from './routes/chatRouter.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(
  express.json({
    limit: '10kb',
  }),
);

app.use('/chat', chatRouter);

export default app;
