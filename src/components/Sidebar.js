import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Dashboard, ExitToApp } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/global international.png";

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const history = useHistory();
  const handleLogout = () => {
    history.push("/login");
  };

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(2),
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Company Logo"
          sx={{ height: 40 }}
        />
        Global international
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <Dashboard style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToApp style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
