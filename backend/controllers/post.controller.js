import Post from '../models/post.model.js'

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
      
   }catch(err){
      console.log(err);
      return res.status(500).json({
         message:"error in addPost file",
         error:err.message
      })
   }
}