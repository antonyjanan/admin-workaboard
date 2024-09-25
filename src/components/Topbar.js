import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/global international.png";

const Topbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            style={{ marginLeft: "10px", marginRight: "20px" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            sx={{ height: 40, mr: 2 }}
            alt="Company Logo"
            src={logo}
          />
          <Typography variant="h6" component="div">
            Global International{" "}
          </Typography>
          <Typography variant="h6" component="div">
            {/* Admin Dashboard */}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
