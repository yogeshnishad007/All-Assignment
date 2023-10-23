
import  React from 'react';
import {useContext} from 'react'
import MyContext from '../Context Api/ContextApi'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


const SinglePage =()=> {

  const {data}=useContext(MyContext)

  return (

   
    <Card  sx={{ display: 'flex',
    margin: 'auto', 
    marginTop:"80px", 
    gap:"100px", 
    width:"60%"}}>

     <CardMedia
        component="img"
        sx={{ width: 300}}
        image={data.Poster}
        alt="Live from space album cover"
        
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {data.Title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {data.Year}
          </Typography>
        </CardContent>
      
      </Box>
      
    </Card>
   
  );
}

export default SinglePage;