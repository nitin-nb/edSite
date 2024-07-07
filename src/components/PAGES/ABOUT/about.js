import React from "react";
import { Grid } from "@mui/material";
import Box from "../../Box/box";
import BoxTwo from "../../Box/boxtwo";
import Social from "../../Social/social";
import Carousal from "../../Carousal/Carousal";
import Ward from "../../Ward/Ward";
import "./About.css";
// import Layout from "../../Layout/layout";

const About = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ height: "730px" }}>
          <Box />
        </Grid>
        <Grid item xs={12} style={{ height: "830px" }}>
          <BoxTwo />
        </Grid>

        <Grid item xs={12} className="soi" style={{ height: "350px" }}>
          <Social />
        </Grid>
        <Grid item xs={12} className="soi" style={{ height: "550px" }}>
          <div className="CarANDwar">
            <Ward />
            <Carousal />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
