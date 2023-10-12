import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

      <Grid
        container
        spacing={2}
        variant="outlined"
        style={{ marginTop: "-40px", position: "relative" }}
      >
        {users.map((el, index) => (
          <Grid item xs={3} key={index}>
            <CardContent style={{ backgroundColor: "#f0f0f0" }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {el.username}
              </Typography>
              <Typography variant="h5" component="div">
                {el.name}
              </Typography>
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {el.email}
                </Typography> */}
              <Typography variant="body2">{el.email}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FetchData;
