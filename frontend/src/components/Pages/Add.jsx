import React from 'react'
import {Box} from '@mui/system'
import {FormLabel, Typography,Button, TextField} from '@mui/material'
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
function Add() {
  return (
    <Box
    display ="flex"
    flexDirection ={"column"}
    width="100%"
    height="100%"
    >
      <Box
      display="flex"
      padding = {2}
      margin ="auto"
      >
      <Typography variant ="h4" fontFamily={"dancing script"}>Add Your travel Diary</Typography>
      <TravelExploreIcon sx={{ fontSize:"40px",paddingLeft:1,color:"lightcoral"}} />
      </Box>
        <form>
          <Box
          padding ={3}
          margin ="auto"
          display="flex"
          flexDirection={"column"}
          width="80%"
          >
          <FormLabel sx={{fontFamily:'Roboto'}}>Title</FormLabel>
          <TextField variant ='standard' margin='normal' />
          <FormLabel sx={{fontFamily:'Roboto'}}>Description</FormLabel>
          <TextField variant ='standard' margin='normal' />
          <FormLabel sx={{fontFamily:'Roboto'}}>Image URL</FormLabel>
          <TextField variant ='standard' margin='normal' />
          <FormLabel sx={{fontFamily:'Roboto'}}>Location</FormLabel>
          <TextField variant ='standard' margin='normal' />
          <FormLabel sx={{fontFamily:'Roboto'}} >Date</FormLabel>
          <TextField variant='standard' margin='normal' />
          <Button variant='contained'color='warning' sx={{margin:"auto",mt:2,width:"50%", borderRadius:7}}>POST</Button>
          </Box>
        </form>
      </Box>
  )
}

export default Add
