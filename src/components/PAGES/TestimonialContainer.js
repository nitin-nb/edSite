import React from 'react';
import Container from '@mui/material/Container';
import CardComponent1 from '../Card/cardcarousel';
import bulb from './IMAGES/bulb.png';
import curl from './IMAGES/curl.png';
import { Box } from '@mui/material';
import "./home.css";

const TestimonialContainer = () => {
  return (
    <Container>
      <Box mb={"2rem"}>
        <h3 className="h3herotext" align="center" style={{ marginBottom: '2rem' }}>Student <span className="herotext2">T</span>estimonial</h3>
        <CardComponent1 />
        <img src={bulb} style={{ width: '200px', height: '200px', marginTop: '-30rem', marginLeft: '-6rem' }} />
        <img src={curl} style={{ width: '200px', height: '200px', marginTop: '-20rem', marginLeft: '90%' }} />
      </Box>
    </Container>
  );
};

export default TestimonialContainer;
