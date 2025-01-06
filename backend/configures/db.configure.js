import mongoose from "mongoose";

const db = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URL);
		console.log("db connected successfully");
		return connection;
	} catch (err) {
		console.log('mongodb not connected!');
		console.log(err.message)
	}
};

export default db;