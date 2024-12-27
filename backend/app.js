import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from './configures/db.configure.js'
import userRoute from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import cors from 'cors'

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(cors({origin:'http://localhost:5173'}));
app.use(express.json())
app.use('/user',userRoute);
app.use('/posts',postRouter);
app.listen(port,()=>{
   console.log(`server is listening on port:${port}`)
   db()
})