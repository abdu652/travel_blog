import React from 'react'
import Card from '../Diaries/Diaries.jsx'
import {Box} from '@mui/system'
const Diaries = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" padding={3}>
      {[1,,2,3,4,5].map((item)=><Card key={item}/>)}
    </Box>
  )
}

export default Diaries
