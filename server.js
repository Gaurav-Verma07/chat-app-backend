import express from 'express';
import mongoose from 'mongoose';
import app from './app.js';
import Pusher from 'pusher';
import Chat from './models/chatSchema.js';

const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: '1478428',
  key: '5d8569239231547b4e13',
  secret: '41f8d7446385a7eb8a51',
  cluster: 'ap2',
  useTLS: true,
});

const connection_url =
  'mongodb+srv://gauravV:FoXliywygD23JBep@cluster0.lor3k4g.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connection_url, () => {
  console.log('Database connected!!!');
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('DB connected');

  const msgCollection = db.collection('chats');
  const changeStream = msgCollection.watch();

  changeStream.on('change', (change) => {
    console.log({ change });
  });
});

app.listen(port, () => console.log(`Listening to port :${port}`));
