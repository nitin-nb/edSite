import React, { useState } from "react";
import { AppBar, Button, Box, Divider, Drawer, IconButton, Toolbar, Typography, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon, AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/logo.png";
import "./header.css"

const Navbar2 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesAnchorEl, setCoursesAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [signInAnchorEl, setSignInAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCoursesOpen = (event) => {
    setCoursesAnchorEl(event.currentTarget);
  };

  const handleCoursesClose = () => {
    setCoursesAnchorEl(null);
  };

  const handleServicesOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const handleSignInOpen = (event) => {
    setSignInAnchorEl(event.currentTarget);
  };

  const handleSignInClose = () => {
    setSignInAnchorEl(null);
  };

  const isMobile = useMediaQuery("(max-width: 600px)");

  const drawer = (
    <Box onClick={handleDrawerToggle}
    sx={{
        textAlign: "center",
        bgcolor: isMobile ? "white" : "transparent",
        color: isMobile ? "black" : "white",
      }} >
      <Typography >
        <img src={Logo} alt="logo"  />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/allcourses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/Service">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box sx={{ fontFamily: "Roboto, sans-serif"}}>
        <AppBar component="nav" sx={{ bgcolor: "white" }} className="navbar2">
          <Toolbar>
            {isMobile && (
              <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography color="Red" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="logo" height={50} width="250" />
            </Typography>
            <Box sx={{ display: isMobile ? "none" : "flex", alignItems: "center" }} >
              <ul className="navigation-menu" style={{ justifyContent: "space-between" }}>
                <li>
                  <NavLink activeClassName="" exact to="/">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li>
                        <NavLink to="/allcourses" style={{ textDecoration: "none" }}>
                          COURSES
                        </NavLink>
                </li>
                <li>
                  <NavLink to="/Services">SERVICES</NavLink>
                </li>
                {/* <li>
                        <NavLink to="/HireUs" style={{ textDecoration: "none" }}>
                          HIRE FROM US
                        </NavLink>
                </li> */}
                <li>
                  <NavLink to="/contact">CONTACT</NavLink>
                </li>
                <li>
                  <NavLink to="/Login">
                    <Button style={{backgroundColor:"#4D2C5E",color:"white"}} startIcon={<AccountCircleIcon sx={{ fontSize: "15px"}}/>}>
                      Log in
                    </Button>
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: isMobile ? "block" : "none", "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" } }}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
      {/* Add your additional components or content here */}
      {/* <Footer /> */}
    </>
  );
};

export default Navbar2;
