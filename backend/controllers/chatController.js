import Chat from "../models/ChatModel.js";
import creatErr from "http-errors";

const getAllChats = async (req, res, next) => {
  try {
    const findAllChats = await Chat.find();
    res.send(findAllChats);
  } catch (err) {
    console.log(err);
    next(creatErr(401, err));
  }
};

const createChat = async (req, res, next) => {
  try {
    const newChatList = await Chat.create({
      ...req.body,
      author: req.userId,
    });
    res.send(newChatList);
  } catch (error) {
    console.log(error);
    next(creatErr(401, error));
  }
};
const deleteChat = async (req, res, next) => {
  try {
    const deletedChat = await Chat.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { Chat: { _id: req.params.chatId } } },
      { new: true }
    );
    res.send(deletedChat);
  } catch (error) {
    next(creatErr(401, error));
  }
};

export { createChat };
