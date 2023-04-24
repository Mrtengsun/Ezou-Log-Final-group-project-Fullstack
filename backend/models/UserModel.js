import mongoose from "mongoose";
import { compare, hash } from "bcrypt";

const { Schema, model } = mongoose;
const addressSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    city: {
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
      type: Number,
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
    communities: [{ type: Schema.Types.ObjectId, ref: "community" }],
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
// Hash the password before saving the admin to the database
userSchema.pre("save", async function () {
  try {
    const hashPassword = await hash(this.password, 10);
    this.password = hashPassword;
  } catch (error) {
    console.log(error);
  }
});
// Add a method to the schema to compare passwords

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    throw new Error(error);
  }
};

const User = model("user", userSchema);
export default User;
