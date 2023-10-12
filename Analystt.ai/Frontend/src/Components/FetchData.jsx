
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  if (loading) {
    return <CircularProgress color="success" size={80} />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Box
        style={{
          height: 300,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "#6050DC",
        }}
      >
        <h1
          style={{
            color: "white",
            position: "absolute",
            top: "20%",
            left: "45%",
          }}
        >
          Users List
        </h1>
      </Box>

      {selectedUser ? (

          
        <div>
            
            <div>

            <Grid item xs={12}  >
              <Card >
                <CardContent style={{ backgroundColor: "#f0f0f0",display:"flex", justifyContent:"space-around"}}>
                  
                  <Typography style={{marginTop:'30px'}} sx={{ fontSize: 14 }}
                     color="text.secondary"
                    
                  >
                    {selectedUser.username}
                  </Typography>

                  <Typography sx={{ fontSize: 14 }}
                     color="text.secondary"
                    gutterBottom
                  >
                        <p>Contact</p>
                        {selectedUser.name}
                  </Typography>


                  <Typography sx={{ fontSize: 14 }}
                     color="text.secondary"
                    gutterBottom
                  >
                        <p>City</p>
                        {selectedUser.address.city}
                  </Typography>
                    
                  <Typography sx={{ fontSize: 14 }}
                     color="text.secondary"
                    gutterBottom
                  >
                        <p>State</p>
                        {selectedUser.address.street}
                  </Typography>
                  
                  <Button 
                    style={{height:"50px", marginTop:"20px",  backgroundColor:"red"}}
                    variant="contained"
                    onClick={handleCloseDetails}
                  >
                    Hide Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            </div>

    <Card>

            <CardContent>
                <Typography variant="h6" gutterBottom>
                User Details
                </Typography>
                <Typography variant="body1">Username: {selectedUser.username}</Typography>
                <Typography variant="body1">Name: {selectedUser.name}</Typography>
                <Typography variant="body1">Email: {selectedUser.email}</Typography>
         </CardContent>
</Card>

          
        </div>
      ) : (
        <Grid container spacing={2} direction="row">
          {users.map((el, index) => (
            <Grid item xs={12} key={index} >
              <Card >
                <CardContent style={{ backgroundColor: "#f0f0f0",display:"flex", justifyContent:"space-around"}}>
                  
                  <Typography style={{marginTop:'30px'}} sx={{ fontSize: 14 }}
                     color="text.secondary"
                    
                  >
                    {el.username}
                  </Typography>

                  <Typography sx={{ fontSize: 14 }}
                     color="text.secondary"
                    gutterBottom
                  >
                        <p>Contact</p>
                        {el.name}
                  </Typography>


                  <Typography sx={{ fontSize: 14 }}
                     color="text.secondary"
                    gutterBottom
                  >
                        <p>City</p>
                        {el.address.city}
                  </Typography>
                    
                  <Typography sx={{ fontSize: 14 }}
                     color="text.secondary"
                    gutterBottom
                  >
                        <p>State</p>
                        {el.address.street}
                  </Typography>
                  
                  <Button 
                    style={{height:"50px", marginTop:"20px",  backgroundColor:"red"}}
                    variant="contained"
                    onClick={() => handleViewDetails(el)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default FetchData;
