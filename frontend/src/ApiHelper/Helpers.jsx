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