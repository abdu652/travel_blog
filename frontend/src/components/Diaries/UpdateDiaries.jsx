import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPostDetails,addPostData} from '../../ApiHelper/Helpers.jsx';
import { Box } from '@mui/system';
import { FormLabel, Typography, Button, TextField } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function UpdateDiaries() {
  const { id } = useParams();
  const [addPost, setAddPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const allPosts = await getAllPostDetails(id);
        setAddPost(allPosts.post || {});
      } catch (error) {
        console.error('Error fetching post details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddPost((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addPost);
    addPostData(addPost)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box display="flex" flexDirection="column" width="100%" height="100%">
      <Box display="flex" padding={2} margin="auto">
        <Typography variant="h4" fontFamily="Dancing Script">
          Add Your Travel Diary
        </Typography>
        <TravelExploreIcon sx={{ fontSize: '40px', paddingLeft: 1, color: 'lightcoral' }} />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          margin="auto"
          display="flex"
          flexDirection="column"
          width="80%"
        >
          <FormLabel>Title</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="title"
            value={addPost?.title || ''}
            onChange={handleChange}
          />
          <FormLabel>Description</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="description"
            value={addPost?.description || ''}
            onChange={handleChange}
          />
          <FormLabel>Image URL</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="image"
            value={addPost?.image || ''}
            onChange={handleChange}
          />
          <FormLabel>Location</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="location"
            value={addPost?.location || ''}
            onChange={handleChange}
          />
          <Box display="flex">
            <Button
            type="submit"
            variant="contained"
            color="warning"
            sx={{ margin: 'auto', mt: 2, width: '25%', borderRadius: 7,display:'inline-block ' }}
          >
            POST
          </Button>
          <Button
            type="button"
            variant="contained"
            sx={{ margin: 'auto', mt: 2, width: '25%', borderRadius: 7,bgcolor:'green' }}
            onClick={()=>setAddPost({})}
          >
            CLEAR
          </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default UpdateDiaries;
