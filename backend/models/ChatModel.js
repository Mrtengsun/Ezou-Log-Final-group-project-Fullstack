import mongoose from "mongoose";

const { Schema, model } = mongoose;

const chatSchema = new Schema(
  {
    author: [{ type: Schema.Types.ObjectId, ref: "user" }],
    text: [
      {
        message: { type: String, required: true, trim: true },
        messageId: { type: Schema.Types.ObjectId, ref: "chat" },
      },
    ],
  },
  { timestamps: true }
);

const Chat = model("chat", chatSchema);

export default Chat;
