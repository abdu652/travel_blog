import React,{useState} from 'react'
import {AppBar, Toolbar, Tabs,Tab} from '@mui/material'
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
function Header() {
   const linkArr = ["home", "Diaries", "Auth"];
   const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{bgcolor:"transparent"}}>
         <Toolbar>
             <TravelExploreIcon sx={{color:"gray"}} />
             <Tabs value={value} onChange={(e,val)=>setValue(val)} sx ={{ml:"auto",textDecoration:"none",}}>
             {linkArr.map((link)=>(
               <Tab key ={link} label ={link}  sx={{textDecoration:"none",":hover":{
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
