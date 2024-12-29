import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
const getAllUser = async (req,res)=>{
   try{
      const user = await User.find();
      if(user.length === 0){
         return res.status(200).json({
            message:"No users are found in the database.",
            success:false
         });
      }
      return res.status(200).json({
         message:"Available users are:",
         user
      });
   }catch(err){
      console.log(err)
      res.status(500).json({
         message:"Error while communicating with database.",
         error:err.message
      })
   }
}

export default getAllUser;

export const signup = async (req,res)=>{
   try{
      const {name, email, password} = req.body;
      if(!email || !password || !name ){
         return res.status(422).json({
            message:"fill all fileds",
            success:false
         });
      }
      if(password.length < 6){
         return res.status(422).json({ 
            message: "password should be greater than 6 character",
            success:false
         });
      }
      const userExists = await User.findOne({email});
      if(userExists){
         return res.status(409).json({
            message:"user already exists",
            success:false
         })
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({name, email,password:hashedPassword});
      await user.save()
      const id = user._id;
      return res.status(201).json({
         message:"User created successfully.",
         success:true,
         id
      });
   }catch(err){
      console.log(err.message)
      return res.status(500).json({
         message:"can't insertt data while signup",
         error:err.message,
         success:false
      });
   }
}

export const login = async (req,res)=>{
   try{
      const {email, password} = req.body;
      if(!email || !password){
         return res.status(422).json({
            message:"please fill all fields",
            success:false
         })
      }
      // check if user exists
      const userExists = await User.findOne({email})
      if(!userExists){
         return res.status(404).json({
            message:"User not found!",
            success:false
         })
      }
      // check if password is correct
      const userHashedPassword = userExists.password;
      const isMatch = await bcrypt.compare(password,userHashedPassword);
      if(!isMatch){
         return res.status(401).json({
            message:"Incorrect password!",
            success:false
         })
      }
      // login success
      const id = userExists._id;
      return res.status(200).json({
         message:"login successful",
         success:true,
         id
      });
      
   }catch(err){
      console.log(err)
      return res.status(500).json({
         message:"error occure in login controller",
         error:err.message,
         success:false
      })
   }
}