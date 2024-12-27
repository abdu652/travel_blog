import React from "react";
import axios from "axios";

const Helpers = async ()=>{
   const response = await axios.get("http://localhost:3000/posts");
   if(response.status !== 200){
      console.log("Error fetching data");
      return null;
   }
   console.log(response.data);
   return response.data;
}

export default Helpers;

const sendAuthData = async (signup, data) => {
   const response = await axios.post(`http://localhost:3000/${signup ? "signup" : "login"}`, data)
   .catch((err)=>{
      console.log(err);
   });
   if(response.status !== 200 || response.status !== 201){
      console.log("Error fetching data");
      return null;
   }
   console.log(response.data);
   return response.data;
}