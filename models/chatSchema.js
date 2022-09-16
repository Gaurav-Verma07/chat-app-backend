import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  message: { type: String, required: [true, 'Message is important'] },
  received: { type: Boolean, required: [true, 'It is a required field'] },
  name: { type: String },
  timeStamp: { type: Date, default: Date.now() },
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
