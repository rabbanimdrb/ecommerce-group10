import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Connected To MongoDB Database ${conn.connection.host}`.bgWhite.green.bold
      // .bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
