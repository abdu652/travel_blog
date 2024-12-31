import React from "react";
import axios from "axios";

const Helpers = async ()=>{
   const response = await axios.get("http://localhost:3000/posts");
   if(response.status !== 200){
      console.log("Error fetching data");
      return null;
   }
   return response.data;
}

export default Helpers;

export const sendAuthData = async (signup, data) => {
   try{
   const response = await axios.post(`http://localhost:3000/user/${signup ? "signup" : "login"}`, data);
   if(response.status > 300){
      return null;
   }
   return response.data;
   }
   catch(err){
      console.log(err.message);
      return null;
   }
}

export const addPostData = async (data)=>{
   try{
      const res = await axios.post(process.env.API_REQUEST,data);
      if(res.status > 300){
         console.log(res.data);
         return null;
      }
      return res.data;
   }catch(err){
      console.log(err)
      return null;
   }
}