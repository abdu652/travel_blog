import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from './configures/db.configure.js'

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.listen(port,()=>{
   console.log(`server is listening on port:${port}`)
   db()
})