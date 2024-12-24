import mongoose from 'mongoose';
import Post from '../models/post.model.js'
import User from '../models/user.model.js'

const getAllPosts = async (req,res)=>{
   try{
      const allPosts = await Post.find();
      if(!allPosts.length){
         return res.status(400).json({message:"No posts found!" })
      }
      return res.status(200).json({
         message:"All available posts are:",
         posts:allPosts});
   }catch(err){
      console.log(err)
      return res.status(500).json({
         message:"server error",
         error:err.message
      })
   }
}

export default getAllPosts;

export const addPost = async (req,res)=>{
   try{
      const {title, description, location, image, date, user} = req.body;
      if(!title || !description || !location || !image || !date || !user){
         return res.status(422).json({message:"fill all fields"})
      }     
      const existingUser = await User.findById(user);
      if(!existingUser){
         return res.status(404).json({message:"User not found"})
      }
      const post = new Post({title, description, location, image, date:new Date(`${date}`), user})
      const session = await mongoose.startSession();
      session.startTransaction();
      existingUser.posts.push(post);
      await existingUser.save({session});
      await post.save({session});
      await session.commitTransaction()
      return res.status(200).json({message:"post submitted successfull.",post})
   }catch(err){
      console.log(err);
      return res.status(500).json({
         message:"error in addPost file",
         error:err.message
      })
   }
}

export const getPostById = async (req,res)=>{
   try{
      const {id} = req.params;
      const post = await Post.findById(id);
      if(!post){
         return res.status(404).json({message:"Post not found!"});
      }
      return res.status(200).json({post})
   }catch(err){
      console.log(err);
      return res.status(500).json({
         message:"error occurs in getPpostById",
         error:err.message
      })
   }
}

export const updatePost = async (req,res)=>{
   try{
      const {id} = req.params;
      const { title, description, location, image, date} = req.body;
      if (!title || !description || !location || !image || !date) {
         return res.status(422).json({ message: "fill all fields" });
      }
      const post = await Post.findByIdAndUpdate(id,{ title, description, location, image, date:new Date(`${date}`)});
      return res.status(200).json({message:"updated successfully."});
   }catch(err){
      console.log(err);
      return res.status(500).json({
         message:"error occurs in updatePost.",
         error:err.message
      })
   }
}

export const deletePost = async (req,res)=>{
   try{
      const {id} = req.params;
      const post = await Post.findByIdAndDelete(id);
      return res.status(200).json({message:"post deleted successfully."})
   }catch(err){
      console.log(err);
      return res.status(500).json({
         message:"error occurs in deletePost.",
         error:err.message
      })
   }
}