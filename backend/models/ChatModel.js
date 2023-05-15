import mongoose from "mongoose";

const { Schema, model } = mongoose;

const messageSchema = new Schema({
  chatId: { type: string },
  senderId: { type: Schema.Types.ObjectId, ref: "user" },
});

const chatSchema = new Schema(
  {
    author: [{ type: Schema.Types.ObjectId, ref: "user" }],
    text: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);
