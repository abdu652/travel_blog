import {Schema, model} from "mongoose";

const postSchema = new Schema({
   title:{
      type:String,
      required:true
   },
   description:{
      type:String,
      required:true
   },
   image:{
      type:String,
      required:true
   },
   location:{
      type:String,
      required:true
   },
   date:{
      type:Date,
      required:true
   },
   user:{
      type:String,
      required:true
   }
})
const Post = model("Post",postSchema);

export default Post;