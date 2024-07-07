import React from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import "./home.css";

const NewsletterContainer = () => {
  return (
    <Container>
      <Box className="newsletter">
        <h3 className="h3herotext1" style={{ marginTop: "1rem" }}>Subscribe to our newsletter</h3>
        <Box class="send-container">
          <input type="text" placeholder=" Email Address" class="search-input" />
          <button class="send-button">Send</button>
        </Box>
      </Box>
    </Container>
  );
};

export default NewsletterContainer;


