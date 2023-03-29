import mongoose from "mongoose";

const Connect = () => {
  const { DB_NAME, DB_HOST, DB_PASS, DB_USER } = process.env;
  const connectString = `mongodb+srv://${DB_USER}:${DB_PASS}${DB_HOST}/${DB_NAME}`;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(connectString)
    .then(() => {
      console.log("[DB] CONNECTED");
    })
    .catch((error) => {
      console.log({ message: "[DB] NOT CONNECTED", error });
    });
};
export default Connect;
