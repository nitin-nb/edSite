import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import cimg1 from '../Logo/cimg1.jpg'
import cimg2 from '../Logo/cimg2.jpg'
import cimg3 from '../Logo/cimg3.jpeg'


const CardComponent = () => {
  return (
    <Box display="flex" justifyContent="space-between" sx={{mt:"1rem"}}>
      <Card sx={{ width: 345,height: 305    , marginRight: "20px" }}>
        <CardContent>
          
          <img
            src={cimg1}
            alt="Image 3"
            style={{ width: "20rem", height: "12rem",marginRight:"20px"}}
          />
          <Typography variant="h6" component="div" style={{ textAlign:"center"}}>
            Front-End Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Become a industry trained employee with perfect front-end skills.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 345,height: 305, marginRight: "20px" }}>
        <CardContent>
          
          <img
            src={cimg2}
            alt="Image 3"
            style={{ width: "20rem", height: "12rem", marginBottom: "5px" }}
          />
          <Typography variant="h6" component="div" style={{ textAlign:"center"}}>
            Mern-Stack Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Become a industry trained employee with perfect full-stack skills.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 345, height: 305   }}>
        <CardContent>
          
          <img
            src={cimg3}
            alt="Image 3"
            style={{ width: "20rem", height: "12rem", marginBottom: "5px" }}  
          />
          <Typography variant="h6" component="div" style={{ textAlign:"center"}}>
            Embedded Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Become a industry trained employee with perfect embedded skills.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;