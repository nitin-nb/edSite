import React from 'react';
import Container from '@mui/material/Container';
import CardComponent from '../Card/card';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./home.css";

const CoursesContainer = () => {
  return (
    <div style={{ backgroundColor:"#ffedc8"}}>
    <Container>
      <h3 className="h3herotext" align="center" style={{ marginBottom: '2rem' }}>Our <span className="herotext2">C</span>ourses</h3>
      <CardComponent />
    </Container>
    <div style={{display:"flex", justifyContent:"center"}}>
      <Link to="/allcourses" style={{textDecoration:"none"}}>
        <Button className='applybtn-home' variant='contained' color='primary' style={{backgroundColor:"#FF7426",marginTop:"1rem", display:"flex", justifyContent:"center",marginBottom:"2rem"}}>More Courses</Button>
      </Link>
    </div>
  </div>
  );
};

export default CoursesContainer;
