import React,{useState} from 'react'
import { Button, FormLabel, TextField, Typography } from '@mui/material'
import {Box} from '@mui/system'
import { sendAuthData } from '../../ApiHelper/Helpers'
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({name:"", email:"", password:""});
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup){ 
      sendAuthData(true, inputs)
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  else{ 
	const loginData = {
	email: inputs.email,
	password: inputs.password
	}
	sendAuthData(false, loginData)
	.then((data)=>{
	console.log(data);
	})
	.catch((err)=>{
	console.log(err);
	})
  }
  }
  const handleChange = (e) => {
	const {name, value} = e.target;
	setInputs((prev)=>{
	return {...prev, [name]:value}
	})
  }

  return (
		<Box
			width="40%"
			borderRadius={10}
			margin="auto"
			marginTop={5}
			backgroundColor={"whitesmoke"}
			boxShadow={"5px 5px 10px #ccc"}>
			<form onSubmit={handleSubmit}>
				<Box
					display="flex"
					margin={"auto"}
					flexDirection={"column"}
					width="80%"
					padding={5}>
					<Typography variant="h4" align="center">
						{isSignup ? "Signup" : "Login"}
					</Typography>
					{isSignup && (
						<>
							<FormLabel>Name</FormLabel>
							<TextField value={inputs.name} name='name' onChange={handleChange} margin="normal" />
						</>
					)}
					<FormLabel>Email</FormLabel>
					<TextField value={inputs.email} name='email' onChange={handleChange} margin="normal" />
					<FormLabel>Password</FormLabel>
					<TextField value={inputs.password} name='password' onChange={handleChange} margin="normal" />
					<Button

						type="submit"
						variant="contained"
						margin={"auto"}
						sx={{ mt: 2, borderRadius: 10 }}>
						{isSignup ? "Signup" : "Login"}
					</Button>
					<Button
            onClick={() => setIsSignup(!isSignup)}
						type="submit"
						variant="outlined"
						margin={"auto"}
						sx={{ mt: 2, borderRadius: 10 }}>
						Change to {isSignup ? "Login" : "Signup"}
					</Button>
				</Box>
			</form>
		</Box>
  )
}
export default Auth
