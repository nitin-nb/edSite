import React from 'react';
import Container from '@mui/material/Container';
import CardComponent2 from '../Card/card1';
import "./home.css";

const CompaniesContainer = () => {
  return (
    <Container style={{ backgroundColor: "#ffedc8" }}>
      <h3 className="h3herotext" align="center">Prestigious <span className="herotext2">C</span>ompanies</h3>
      <p className="h3herotext2" align="center" style={{ marginBottom: 'rem' }}>Companies working with us</p>
      <CardComponent2 />
    </Container>
  );
};

export default CompaniesContainer;
