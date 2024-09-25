import React, { useState } from "react";
import {
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Singapore from "../../assets/singapore.jpeg";
import Georgia from "../../assets/Georgia.jpeg";
import Australia from "../../assets/Australia.jpeg";
import UnitedKingdom from "../../assets/UnitedKingdom.jpeg";

const WorkDestination = ({ history }) => {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  // Sample work location data
  const workLocations = [
    {
      name: "Singapore",
      image: Singapore,
    },
    {
      name: "Georgia",
      image: Georgia,
    },
    {
      name: "Australia",
      image: Australia,
    },
    {
      name: "United Kingdom",
      image: UnitedKingdom,
    },
  ];
  const handleClickOpen = (location) => {
    setSelectedLocation(location);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log("Deleting", selectedLocation); // Implement deletion logic here
    setOpen(false);
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        style={{
          marginBottom: "20px",
          backgroundColor: "#6c63ff",
          color: "#fff",
        }}
        onClick={() => history.push("/dashboard/Addpages")}
      >
        + Add Work Location
      </Button>

      <Grid container spacing={4}>
        {workLocations.map((location, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="150"
                image={location.image}
                alt={location.name}
              />

              <CardContent
                sx={{ textAlign: "center", backgroundColor: "#f0f0f0" }}
              >
                <h3>{location.name}</h3>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    backgroundColor: "#6c63ff",
                    color: "#fff",
                    marginTop: "10px",
                    "&:hover": {
                      backgroundColor: "#5a54d8",
                    },
                  }}
                  onClick={() => history.push("/dashboard/Addpages")}
                >
                  Edit Work Location
                </Button>
                <IconButton
                  onClick={() => handleClickOpen(location)}
                  sx={{
                    // position: "absolute",
                    top: 4,
                    left: 12,
                    backgroundColor: "#f44336",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#d32f2f",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {"Are you sure you want to delete this location?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deleting {selectedLocation?.name} will remove it permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WorkDestination;
