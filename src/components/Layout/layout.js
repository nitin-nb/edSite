import React from "react";
import Footer from "../Footer/Footer1";
import Navbar1 from "../Header/Header1";
import Navbar2 from "../Header/Header2";


const Layout = ({ children }) => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;