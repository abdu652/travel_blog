import mongoose from "mongoose";

const db = async () => {
	try {
      const url = process.env.MONGO_URL;
		await mongoose.connect(url);
		console.log("db connected successfully");
	} catch (err) {
		console.log(err.message);
	}
};

export default db;