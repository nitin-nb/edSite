import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import limg1 from '../Logo/mont.png';
import limg2 from '../Logo/jasmine.jpeg';
import limg3 from '../Logo/kgisl.jpeg';
import "./card.css";


const CardComponent2 = () => {
  return (
    <Box display="flex" justifyContent="space-between" sx={{mt:"1rem"}}>
      <Card sx={{ width: 250,height: 230 , marginRight: "20px", marginBottom:"1rem" }}>
        <CardContent className="h3herotext">
          
          <img
            src={limg1}
            alt="Image 1"
            style={{ width: "12rem", height: "7rem",marginRight:"20px", borderRadius:"45px", alignItems:"center" }}
          />
          <Typography variant="h6" component="div"  style={{ marginTop:"1rem",textAlign:"center"}}  className="h3herotext">
            MontBleu Technologies
          </Typography>
          <Typography variant="body2" color="text.secondary"  className="h3herotext" style={{marginTop:"1rem",textAlign:"center"}}>
            Product & Service based Solutions.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 250,height: 230, marginRight: "20px", marginBottom:"1rem" }}>
        <CardContent >
          
          <img
            src={limg2}
            alt="Image 3"
            style={{ width: "12rem", height: "7rem", marginBottom: "5px", borderRadius:"45px",  }}
          />
          <Typography variant="h6" component="div" style={{ marginTop:"1rem",textAlign:"center"}}  className="h3herotext">
            Jasmine Info-Tech
          </Typography>
          <Typography variant="body2" color="text.secondary"  className="h3herotext" style={{marginTop:"1rem",textAlign:"center"}}>
          Embedded Product, Consulting & Automotive solutions.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 250, height: 230, marginBottom:"1rem"   }}>
        <CardContent className="h3herotext">
          
          <img
            src={limg3}
            alt="Image 3"
            style={{ width: "12rem", height: "7rem", marginBottom: "5px", borderRadius:"45px", alignItems:"center" }}  
          />
          <Typography variant="h6" component="div"  style={{ marginTop:"1rem",textAlign:"center"}} className="h3herotext">
            KGISL 
          </Typography>
          <Typography variant="body2" color="text.secondary"  className="h3herotext" style={{marginTop:"1rem",textAlign:"center"}}>
            Product & Consulting Service.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent2;