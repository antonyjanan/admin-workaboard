import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const DashboardPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const topbarHeight = 64;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          height: `${topbarHeight}px`,
          width: "100%",
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      >
        <Topbar toggleSidebar={handleDrawerToggle} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          marginTop: `${topbarHeight}px`,
        }}
      >
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            overflowY: "auto",
            backgroundColor: "#f5f5f5",
            transition: "margin-left 0.3s ease",
            marginLeft: isSidebarOpen && isDesktop ? "240px" : "0px",
          }}
        >
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
