import mongoose from "mongoose";
import { compare, hash } from "bcrypt";

const { Schema, model } = mongoose;
const fotoSchema = new Schema(
  {
    fieldname: { type: String, required: true },
    originalname: { type: String, required: true },
    mimetype: { type: String, required: true },
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
  },
  { _id: false }
);
const addressSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    placeOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
    },

    address: {
      type: addressSchema,
    },

    profession: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    communities: [{ type: Schema.Types.ObjectId, ref: "community" }],
    qrCode: { type: String },

    imgProfile: { type: fotoSchema },
    cardId: {
      type: String,
    },
  },

  {
    toJSON: {
      transform: function (doc, data) {
        delete data.password;
        delete data.__v;
        return data;
      },
    },
    timestamps: true,
  }
);

const User = model("user", userSchema);
export default User;
