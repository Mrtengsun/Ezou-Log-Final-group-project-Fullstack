import mongoose from "mongoose";

const { Schema, model } = mongoose;
const commentSchema = new Schema({
  author: [{ type: Schema.Types.ObjectId, ref: "user" }],
  text: { type: String, required: true, trim: true },
});

const communitySchema = new Schema(
  {
    author: [{ type: Schema.Types.ObjectId, ref: "user" }],
    topic: { type: String, required: true },
    description: { type: String, required: true, trim: true },
    comments: [{ type: commentSchema }],
    likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
    avatar: { type: String, data: Buffer },
  },

  { timestamps: true }
);

const Community = model("community", communitySchema);
export default Community;
