import React from 'react';
import Container from '@mui/material/Container';
import homebg2 from './IMAGES/bg2.jpg'
import img2 from './IMAGES/bg2img.png'
import img1 from "./IMAGES/girlpic.png"
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./home.css";

const FutureContainer = () => {
  return (
    <Container maxWidth={false} disableGutters style={{ marginBottom: "3rem", marginLeft: "-5rem"}}>
      <img src={img1} className='overlayimage3'/>
      <img src={homebg2} style={{ width: "100%", height: "400px" }} />
      <img src={img2} className="overlayimage2" style={{ height: "400px" }} />
      <Box className="herotext3 textOverlay1">
        <span >The <span className="herotext">Smart</span> Choice for your <span className="herotext"><br />Future </span></span>
        <Link to="/forms">
        <Button className='applybtn-home' variant='contained' color='primary' style={{backgroundColor:"#8d8d8d",float:"right",marginTop:"30px"}}>Apply Now</Button>
        </Link>
      </Box >
      
    </Container>
  );
};

export default FutureContainer;
