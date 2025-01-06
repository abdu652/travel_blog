import React, { useEffect } from "react";
import Card from '../Diaries/Diaries.jsx'
import {Box} from '@mui/system'
import getAllPosts from "../../ApiHelper/Helpers.jsx";
const Diaries = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
		getAllPosts()
			.then((data) => {
				if (Object.keys(data).length === 0) {
					console.log("Error fetching data");
				}
				setPosts(data?.posts);
			})
			.catch((err) => {
				console.log(err);
			});
  }, []);	
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" padding={3}>
      {posts.length >0 && posts.map((item, index)=><Card key={index} {...item}
       date = {new Date(item.date).toLocaleDateString()}
		 id = {item._id}
		  />)}
    </Box>
  )
}

export default Diaries
