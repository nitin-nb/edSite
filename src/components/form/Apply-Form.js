import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const Form1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    degree: "",
    yearOfPassing: "",
    marksPercentage: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission or other actions here
      console.log(formData);
      // Reset the form
      setFormData({
        name: "",
        email: "",
        mobileNumber: "",
        degree: "",
        yearOfPassing: "",
        marksPercentage: "",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters and spaces";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (formData.mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile number is required";
      isValid = false;
    } else if (!/^[0-9]+$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number";
      isValid = false;
    }

    if (formData.degree.trim() === "") {
      newErrors.degree = "Degree is required";
      isValid = false;
    }

    if (formData.yearOfPassing.trim() === "") {
      newErrors.yearOfPassing = "Year of passing is required";
      isValid = false;
    }

    if (formData.marksPercentage.trim() === "") {
      newErrors.marksPercentage = "Marks percentage is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case "name":
        if (value.trim() === "") {
          newErrors.name = "Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.name = "Name should only contain letters and spaces";
        } else {
          delete newErrors.name;
        }
        break;
      case "email":
        if (value.trim() === "") {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Invalid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "mobileNumber":
        if (value.trim() === "") {
          newErrors.mobileNumber = "Mobile number is required";
        } else if (!/^[0-9]+$/.test(value)) {
          newErrors.mobileNumber = "Invalid mobile number";
        } else {
          delete newErrors.mobileNumber;
        }
        break;
      case "degree":
        if (value.trim() === "") {
          newErrors.degree = "Degree is required";
        } else {
          delete newErrors.degree;
        }
        break;
      case "yearOfPassing":
        if (value.trim() === "") {
          newErrors.yearOfPassing = "Year of passing is required";
        } else {
          delete newErrors.yearOfPassing;
        }
        break;
      case "marksPercentage":
        if (value.trim() === "") {
          newErrors.marksPercentage = "Marks percentage is required";
        } else {
          delete newErrors.marksPercentage;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  return (
    <>
      <section id="ApplyNow">
        
        <Container
          maxWidth="md"
          sx={{ mt: 2, color: "#4D2C5E", padding: "2rem", borderRadius: "8px" }}
        >
          <h3 style={{ marginBottom:"2rem", display:"flex", justifyContent:"center"}}>APPLY NOW</h3>
          <div className="abstract-image13"></div>
          <div className="abstract-image14"></div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  color="primary"
                  size="large"
                  inputProps={{
                    pattern: "^[a-zA-Zs]+$",
                    title: "Name should only contain letters and spaces",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  color="primary"
                  inputProps={{
                    pattern: "\\S+@\\S+\\.\\S+",
                    title: "Invalid email address",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  type="mobile"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  error={!!errors.mobileNumber}
                  helperText={errors.mobileNumber}
                  color="primary"
                  inputProps={{
                    pattern: "^[0-9]+$",
                    title: "Invalid mobile number",
                  }}
                  style={{marginTop:"1.2rem",height:"37px"}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel id="degree-label">Degree</InputLabel>
                <Select
                  fullWidth
                  labelId="degree-label"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  error={!!errors.degree}
                  color="primary"
                >
                  <MenuItem value="">Select Degree</MenuItem>
                  <MenuItem value="Bachelor">Bachelor</MenuItem>
                  <MenuItem value="Master">Master</MenuItem>
                  <MenuItem value="PhD">PhD</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Year of Passing"
                  name="yearOfPassing"
                  type="number"
                  value={formData.yearOfPassing}
                  onChange={handleChange}
                  error={!!errors.yearOfPassing}
                  helperText={errors.yearOfPassing}
                  color="primary"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Marks Percentage"
                  name="marksPercentage"
                  type="number"
                  value={formData.marksPercentage}
                  onChange={handleChange}
                  error={!!errors.marksPercentage}
                  helperText={errors.marksPercentage}
                  color="primary"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel id="degree-label">Category</InputLabel>
                <Select
                  fullWidth
                  labelId="degree-label"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  error={!!errors.degree}
                  color="primary"
                >
                  <MenuItem value="Bachelor">Software Development</MenuItem>
                  <MenuItem value="Master">Automotive Embedded</MenuItem>
                  <MenuItem value="PhD">Testing</MenuItem>
                  <MenuItem value="PhD">Mechanical Design</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={2}>
                <Button type="submit" variant="contained" color="primary" style={{background:'#4D2C5E'}}>
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

export default Form1;
