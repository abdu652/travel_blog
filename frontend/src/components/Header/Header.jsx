import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {Button,AppBar, Toolbar, Tabs,Tab} from '@mui/material'
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ExploreIcon from '@mui/icons-material/Explore';
import { useSelector,useDispatch } from 'react-redux'
import { authActions } from '../../store/index.js'
// qgNNe4H7Sj8bVd17
function Header() {
	const dispatch = useDispatch();
	if(localStorage.getItem('userId')){
	dispatch(authActions.login());
	}
	let isLoggedIn;
	if(localStorage.getItem('userId')){
		isLoggedIn = useSelector((state)=>state.isLoggedin);
	}
	else{
		isLoggedIn = useSelector((state)=>state.isLoggedin);
	}
   const linkArr = [ "home", "diaries", "auth"];
   const loggedInLink = ["home", "diaries", "Add", "profile"];
   const [value, setValue] = useState();
  return (
		<div>
			<AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
				<Toolbar>
					<ExploreIcon sx={{ color: "green" }} />

					<Tabs
						value={value}
						onChange={(e, val) => setValue(val)}
						sx={{ ml: "auto", textDecoration: "none" }}>
						{isLoggedIn
							? (
                loggedInLink.map((link) => (
						<Tab
							key={link}
							LinkComponent={Link}
							to={`/${link === "home" ? "" : link}`}
							label={link}
							sx={{
								textDecoration: "none",
								":hover": {
									textDecoration: "underline",
									textUnderlineOffset: "18px",
								},
							}}
						/>
				  ))
              )
							: (
					linkArr.map((link) => (
						<Tab
							key={link}
							LinkComponent={Link}
							to={`/${link === "home" ? "" : link}`}
							label={link}
							sx={{
								textDecoration: "none",
								":hover": {
									textDecoration: "underline",
									textUnderlineOffset: "18px",
								},
							}}
						/>
					))
              )}
					</Tabs>
				{isLoggedIn &&	<Button
					sx={{ textDecoration: "none" }}
						onClick={() => {
							localStorage.removeItem("employee");
							localStorage.removeItem("userId");
							window.location.href = "/";
						}}
					>Logout</Button>}
				</Toolbar>

			</AppBar>
		</div>
  );
}

export default Header
