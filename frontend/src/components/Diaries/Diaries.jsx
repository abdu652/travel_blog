import React from 'react';
import {CardMedia, Card, CardHeader,Avatar, IconButton, CardContent,Typography, CardActions, Button} from '@mui/material'
import {Box} from '@mui/system'
import Forest from '../../assets/images/forest.jpg'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from 'react-router-dom';
export default function RecipeReviewCard({title, date, description, location, image, user, id}) {
	const isLoggedIn = ()=>{
		if(localStorage.getItem('userId') === user){
			return true;
		}
		else{
			return false;
		}
	}
  return (
		<Card
			sx={{
				width: "50%",
				margin: 1,
				padding: 1,
				display: "flex",
				flexDirection: "column",
				boxShadow: "5px 5px 10px #ccc",
			}}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						{<LocationOnIcon />}
					</IconButton>
				}
				title={location}
				header={location}
				subheader={date}
			/>
			<img src={image} alt="forest" />
			<CardContent>
				<Typography
					paddingBottom={1}
					variant="body2"
					sx={{ color: "text.secondary" }}>
					<Typography
						paddingBottom={1}
						variant="body2"
						sx={{ color: "text.secondary" }}>
						{title}
					</Typography>
				</Typography>
				<hr />
				<Box display="flex">
					<Typography
						paddingTop={1}
						width="170px"
						variant="h8"
						sx={{ color: "#3645f" }}>
						Abdu Seid:
					</Typography>
					<Typography
						paddingTop={1}
						variant="body2"
						fontWeight={"bold"}
						sx={{ color: "text.secondary" }}>
						{description}
					</Typography>
				</Box>
			</CardContent>
			{ isLoggedIn() &&
			<Box display="flex">
				<CardActions sx={{ml:"auto"}}>
					<IconButton color='warning' LinkComponent={Link} to ={`/posts/${id}`}><EditIcon/></IconButton>
					<IconButton color='error'><DeleteForeverIcon os/></IconButton>
				</CardActions>
			</Box>
			}
		</Card>
  );
}