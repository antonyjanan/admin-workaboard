import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { useHistory } from "react-router-dom";

const TestimonialAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    visa: "",
    Description: "",
    image: null,
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to API
    console.log(formData);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              Add Testimonials
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="name"
                    name="place"
                    value={formData.name}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="visa"
                    name="place"
                    value={formData.visa}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Place"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    name="place"
                    value={formData.Description}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" component="label" fullWidth>
                    Upload Image
                    <input
                      type="file"
                      hidden
                      onChange={handleFileChange}
                      required
                    />
                  </Button>
                  {formData.image && (
                    <Typography variant="caption" display="block" gutterBottom>
                      {formData.image.name}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: "15px" }}
                  >
                    Add Testimonials
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TestimonialAdd;
