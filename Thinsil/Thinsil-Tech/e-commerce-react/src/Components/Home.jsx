import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import MyContext from "../Context Api/ContextApi";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const { data, handleData } = useContext(MyContext);
  console.log("data", data);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=2f0fc567&s=man")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        setUsers(data.Search);
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
        ></h1>
      </Box>

      <Grid container spacing={2} direction="row">
        {users.map((el, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card>
              <CardContent
                style={{
                  backgroundColor: "#f0f0f0",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "400px",
                  height: "400px",
                }}
                sx={{
                  display: {
                    xs: "grid",
                    sm: "flex",
                    lg: "flex",
                  },
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    lg: "row",
                  },
                  justifyContent: {
                    sm: "center",
                  },
                  alignItems: {
                    sm: "center",
                  },
                  marginLeft: {
                    sm: "-70px",
                  },
                }}
              >
                

                <Box style={{ marginLeft: "100px" }}>
                  <img
                    src={el.Poster}
                    alt={el.title}
                    style={{
                      width: "70%",
                      height: "50%",
                    }}
                  />
                </Box>

              

                <Box sx={{}}>
                  <Link to="/singlepage">
                    <Button
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1.4rem",
                          lg: ".8rem",
                        },
                        marginTop: {
                          xs: "30px",
                          sm: "30px",
                          lg: "30px",
                        },
                        marginLeft: {
                          sm: "80px",
                          lg: "80px",
                        },
                        height: {
                          xs: "30px",
                          sm: "40px",
                          lg: "40px",
                        },

                        backgroundColor: "red",
                      }}
                      variant="contained"
                      onClick={() => {
                        handleData(el);
                      }}
                    >
                      View Details
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
