import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      
        <Box style={{display:"flex", gap:"40px"}}>
           <Link to="/" style={{textDecoration: 'none'}}>
             <Typography style={{color:"white"}}>Home</Typography>
           </Link>

           <Link to="/cart" style={{textDecoration: 'none'}}>
             <Typography style={{color:"white"}}>Cart</Typography>
           </Link>
           </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
