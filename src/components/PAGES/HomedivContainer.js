import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import j1 from './IMAGES/job(1).png'
import j2 from './IMAGES/job(2).png';
import j3 from './IMAGES/job(3).png';
import bulb from './IMAGES/bulb.png';
import curl from './IMAGES/curl.png';
import "./home.css";
import { Link } from 'react-router-dom'

const HomedivContainer = () => {
  return (
    <Container justifyContent="center">
      <Box className="student-card-title" sx={{ mt: "2rem", mx: "auto" }}>
        <Link to='/forms' style={{textDecoration:"none", color:"white"}}>
        Are You a Student?.. <p style={{fontSize:"14px"}}>click here</p>
        </Link>
      </Box>
      <Box className="student-card" sx={{ mt: "1rem", mx: "auto" }}>
        <Grid container spacing={2} sx={{ alignContent: "center" }}>
          <Grid item xs={4}>
            <div className="grid-item">
              <img src={j1} alt="Image 1" style={{ width: '50px', height: '50px', border: "3px solid black", marginLeft: "20px" }} />
              <div className="content">
                <h6>Learn The Latest Skills</h6>
                <p>Learn the in-demand skill that has a greater scope</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="grid-item">
              <img src={j2} alt="Image 1" style={{ width: '50px', height: '50px', border: "3px solid black" }} />
              <div className="content">
                <h6>Get Ready For a Career</h6>
                <p>Practice the learned skill with our working environment.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="grid-item">
              <img src={j3} alt="Image 1" style={{ width: '50px', height: '50px', border: "3px solid black" }} />
              <div className="content">
                <h6>Earn a placement</h6>
                <p>Get your dream employment that matches your skill.</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <img src={bulb} style={{ width: '200px', height: '200px', marginTop: '-20rem', marginLeft: '-5rem' }} />
      <img src={curl} style={{ width: '200px', height: '200px', marginTop: '-21rem', marginLeft: '90%' }} />
    </Container>
  );
};

export default HomedivContainer;
