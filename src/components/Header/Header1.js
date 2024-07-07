import React from "react";
import { contactObj, admissionObj, applyObj, enquiryObj } from "../contact";
import { handleMailClick } from "../contact";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LaunchIcon from '@mui/icons-material/Launch';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import { Link } from "react-router-dom";



function Navbar1() {
  return (
    <div className="container-fluid navbar1_grid position-fixed z-index-100 navbar1">
      <div className="row">
        <div className="col-lg-2 col-md-6">
          <EmailIcon />
          <a onClick={handleMailClick}> {contactObj.mail}</a>
        </div>
        <div className="col-lg-4">
          <PhoneIcon />
          <a> {contactObj.ph}</a>
        </div>
        <div className="col-lg-6 text-end d-flex justify-content-end">
          <div className="me-3">
            <ConfirmationNumberIcon />
            <a> {admissionObj}</a>
          </div>
          <div className="me-3">
            <LaunchIcon />
           <Link to="/forms" style={{color:'white'}}>  {applyObj}</Link>
          </div>
          <div>
            <ContactPhoneIcon />
            <a> {enquiryObj}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;