import React,{useState} from 'react'
import { addPostData } from '../../ApiHelper/Helpers.jsx';
import {Box} from '@mui/system'
import {FormLabel, Typography,Button, TextField} from '@mui/material'
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
function Add() {
  const [addPost, setAddPost] = useState({
    title:"",
    description:"",
    image:"",
    location:"",
    date:""
  })
  const handleChange = (e) => {
    const {name, value} = e.target;
    setAddPost((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      }
    })
  }
    const handleSubmit = (e)=>{
      e.preventDefault();

      addPostData(addPost).then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
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
        <form onSubmit={handleSubmit}>
          <Box
          padding ={3}
          margin ="auto"
          display="flex"
          flexDirection={"column"}
          width="80%"
          >
          <FormLabel>Title</FormLabel>
          <TextField variant ='standard' margin='normal' name='title' value={addPost.title} onChange={handleChange} />
          <FormLabel>Description</FormLabel>
          <TextField variant ='standard' margin='normal' name='description' value={addPost.description} onChange={handleChange} />
          <FormLabel>Image URL</FormLabel>
          <TextField variant ='standard' margin='normal' name='image value={addPost.image}' onChange={handleChange} />
          <FormLabel>Location</FormLabel>
          <TextField variant ='standard' margin='normal' name='location' value={addPost.location} onChange={handleChange} />
          <FormLabel>Date</FormLabel>
          <TextField variant='standard' margin='normal' name='date' value={addPost.date} onChange={handleChange} />
          <Button type='submit' variant='contained'color='warning' sx={{margin:"auto",mt:2,width:"50%", borderRadius:7}}>POST</Button>
          </Box>
        </form>
      </Box>
  )
}

export default Add
