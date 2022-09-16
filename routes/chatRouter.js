import express from 'express';
import { postChat, getChat } from '../controllers/chatController.js';

const chatRouter = express.Router();

chatRouter.post('/new', postChat);
chatRouter.get('/sync', getChat);

export default chatRouter;
