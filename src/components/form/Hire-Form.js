import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import './Apply-Form.css';

const HireForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    hiringEnquiry: '',
    message: '',
    designation: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the form field
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission or other actions here
      console.log(formData);
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        hiringEnquiry: '',
        message: '',
        designation: '',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      newErrors.name = 'Name should not contain numbers';
      isValid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    }

    if (formData.companyName.trim() === '') {
      newErrors.companyName = 'Company Name is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case 'name':
        if (value.trim() === '') {
          newErrors.name = 'Name is required';
        } else if (/\d/.test(value)) {
          newErrors.name = 'Name should not contain numbers';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        if (value.trim() === '') {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Invalid email format';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phoneNumber':
        if (value.trim() === '') {
          newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value)) {
          newErrors.phoneNumber = 'Invalid phone number format';
        } else {
          delete newErrors.phoneNumber;
        }
        break;
      case 'companyName':
        if (value.trim() === '') {
          newErrors.companyName = 'Company Name is required';
        } else {
          delete newErrors.companyName;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  return (
    <>
      <section id="HireUS" className="htdsection">
        <Container
          maxWidth="md"
          style={{
            mt: 4,
            color: '#000',
            padding: '2rem',
            borderRadius: '8px',
            backgroundColor: '#000',
          }}
        >
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
              color: '#000',
            }}
          >
            APPLY NOW
          </h3>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={!!errors.companyName}
                  helperText={errors.companyName}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Hiring Enquiry"
                  name="hiringEnquiry"
                  value={formData.hiringEnquiry}
                  onChange={handleChange}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  InputProps={{
                    style: { color: '#fff' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </section>
    </>
  );
};

export default HireForm;
