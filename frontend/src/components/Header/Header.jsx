import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Tabs,Tab} from '@mui/material'
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
function Header() {
   const linkArr = ["home", "diaries", "auth"];
   const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{bgcolor:"transparent", position:"sticky"}}>
         <Toolbar>
             <TravelExploreIcon sx={{color:"gray"}} />
             <Tabs value={value} onChange={(e,val)=>setValue(val)} sx ={{ml:"auto",textDecoration:"none",}}>
             {linkArr.map((link)=>(
               <Tab key ={link} 
               LinkComponent={Link} to ={`/${link === "home" ? "" : link}`}
               label ={link}  sx={{textDecoration:"none",":hover":{
                  textDecoration:"underline",
                  textUnderlineOffset:"18px"}
               }} />
               ))}
             </Tabs>
         </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
