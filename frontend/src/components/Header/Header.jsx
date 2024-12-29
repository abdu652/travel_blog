import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Tabs,Tab} from '@mui/material'
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useSelector } from 'react-redux';
function Header() {
  const isLoggedIn = useSelector((state)=>state.isLoggedin);
   const linkArr = ["home", "diaries", "auth"];
   const loggedInLink = ["home", "diaries", "Add", "profile"];
   const [value, setValue] = useState();
  return (
		<div>
			<AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
				<Toolbar>
					<TravelExploreIcon sx={{ color: "gray" }} />

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
				</Toolbar>
			</AppBar>
		</div>
  );
}

export default Header
