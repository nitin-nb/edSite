import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TerrainIcon from '@mui/icons-material/Terrain';
import homebg from "../IMAGES/climbing.jpg";
import overlayImage from "../IMAGES/overlayimg.png";
import SearchIcon from '@mui/icons-material/Search';
import HomedivContainer from '../HomedivContainer';
import CoursesContainer from '../CoursesContainer';
import FutureContainer from '../FutureContainer';
import TestimonialContainer from '../TestimonialContainer';
import CompaniesContainer from '../CompaniesContainer';
import NewsletterContainer from '../NewsletterContainer';
import Layout from '../../Layout/layout';
import homebg2 from "../IMAGES/bg2.jpg";
import img2 from '../IMAGES/bg2img.jpg';

export default function Homediv() {
  return (
    <>
      <Container maxWidth="xl" className="homediv">
        <img src={homebg} className="homebgimg1" />
        <img src={overlayImage} className="overlayhome-image" />
        <Box maxWidth="xs" className="textOverlay">
          <Box className="montserratText">
            <span >Reach Your <span className="herotext"><br />Cliff <TerrainIcon fontSize="xl" /> Smartly!</span></span>
          </Box >
          <Box >
            <span className="additionalText">We are on a mission to address the digital skills gap for 10 Million+ young professionals, train and empower them.</span>
          </Box>
          <Box class="search-container">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="     Search for a Course..." class="search-input" />
            <button class="search-button">Search</button>
          </Box>
        </Box>
      </Container>
      <HomedivContainer />
      <CoursesContainer />
      <Container>
        <FutureContainer />
      </Container>
      <TestimonialContainer />
      <CompaniesContainer />
      <NewsletterContainer />
    </>
  );
}
