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
import Singaporeairline from "../../assets/Singaporeairline.png";
import Georgiapower from "../../assets/Georgiapower.jpeg";
import Australiaowned from "../../assets/Australiaowned.png";
import UnitedKingdomhouse from "../../assets/UnitedKingdomhouse.png";

const PartneringCompanies = ({ history }) => {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const workLocations = [
    {
      name: "",
      image: Singaporeairline,
    },
    {
      name: "",
      image: Georgiapower,
    },
    {
      name: "",
      image: Australiaowned,
    },
    {
      name: "",
      image: UnitedKingdomhouse,
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
        onClick={() => history.push("/dashboard/PartneringAdd")}
      >
        + Add Partnering Companies
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
                  onClick={() => history.push("/dashboard/PartneringAdd")}
                >
                  Edit Partnering Companies
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

export default PartneringCompanies;
