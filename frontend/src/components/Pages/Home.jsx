import React from 'react'
import { Button,Typography } from '@mui/material'
import { Box } from '@mui/system'
import Road from '../../assets/images/road.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box position={"relative"} width="100%" height="90vh">
        <img src={Road} width={"100%"} height="70%" />
      <Typography  variant='h3' textAlign={"center"} 
      width={"100%"} sx={{position:"absolute", top:"0px", 
        fontFamily:"Dancing Script, cursive",
        fontWeight:"bold",
        background:"#1b1b1b",
      color:"whitesmoke"}} > Dare to live the life  you've always wanted
      </Typography>
      <Box width="100%" height="30%" display={"flex"} flexDirection="column" >
        <Typography variant='h4' textAlign={"center"} padding={4} fontFamily={"Roboto, sans-serif"} fontWeight={300} >
          Share Your travel Diaries With Us
        </Typography>
        <Box display={"flex"} margin={"auto"} >
          <Button variant='outlined' sx={{mr:2}}>Share Your Story</Button>
          <Button LinkComponent={Link} to="/diaries" variant='contained' sx={{ml:2}}>View Diaries</Button>
          </Box>
      </Box>
      </Box>
    </div>
  )
}

export default Home
