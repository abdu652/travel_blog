import React from 'react';
import {CardMedia, Card, CardHeader,Avatar, IconButton, CardContent,Typography, CardActions, Button} from '@mui/material'
import {Box} from '@mui/system'
import Forest from '../../assets/images/forest.jpg'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function RecipeReviewCard() {
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
				title="Shrimp and Chorizo Paella"
				header="Addis"
				subheader="September 14, 2016"
			/>
			<img src={Forest} alt="forest" />
			<CardContent>
				<Typography
					paddingBottom={1}
					variant="body2"
					sx={{ color: "text.secondary" }}>
					<Typography
						paddingBottom={1}
						variant="body2"
						sx={{ color: "text.secondary" }}>
						This impression panella
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
						This impressive paella is a perfect party dish and a fun meal
						to cook together with your guests. Add 1 cup of frozen peas
						along with the mussels, if you like.
					</Typography>
				</Box>
			</CardContent>
			<Box display="flex">
				<CardActions sx={{ml:"auto"}}>
					<IconButton color='warning'><EditIcon/></IconButton>
					<IconButton color='error'><DeleteForeverIcon/></IconButton>
				</CardActions>
			</Box>
		</Card>
  );
}