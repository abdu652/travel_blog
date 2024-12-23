import User from "../models/user.model.js"
const getAllUser = async ()=>{
   try{
      const user = User.find();
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
      console.log(err.message)
      res.status(500).json({
         message:"Error while communicating with database.",
         error:errr.message
      })
   }
}

export default getAllUser;