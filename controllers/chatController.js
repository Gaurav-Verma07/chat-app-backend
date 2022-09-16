import Chat from '../models/chatSchema.js';

export const postChat = async (req, res, next) => {
  try {
    const chat = await Chat.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        chat,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      error: err,
    });
  }
};

export const getChat = async (req, res, next) => {
  try {
    const chat = await Chat.find();
    res.status(200).json({
      status: 'success',
      data: {
        chat,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      error: err,
    });
  }
};
