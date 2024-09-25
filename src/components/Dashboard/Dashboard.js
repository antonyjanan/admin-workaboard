import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, Route, Switch, Redirect, useLocation } from "react-router-dom";
import WorkDestination from "./WorkDestination";
import PartneringCompanies from "./PartneringCompanies";
import Testimonials from "./Testimonials";
import AddPages from "../AddPages";
import TestimonialAdd from "../TestimonialAdd";
import PartneringAdd from "../PartneringAdd";

const Dashboard = () => {
  const location = useLocation();
  const currentTab = location.pathname;

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={currentTab}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        centered
      >
        <Tab
          label="Work Destination"
          value="/dashboard/WorkDestination"
          to="/dashboard/WorkDestination"
          component={Link}
        />
        <Tab
          label="Testimonials"
          value="/dashboard/Testimonials"
          to="/dashboard/Testimonials"
          component={Link}
        />
        <Tab
          label="Partnering Companies"
          value="/dashboard/PartneringCompanies"
          to="/dashboard/PartneringCompanies"
          component={Link}
        />
      </Tabs>

      <Box sx={{ padding: 2 }}>
        <Switch>
          {/* Redirect from /dashboard to /dashboard/WorkDestination */}
          <Route exact path="/dashboard">
            <Redirect to="/dashboard/WorkDestination" />
          </Route>

          <Route
            path="/dashboard/WorkDestination"
            component={WorkDestination}
          />
          <Route path="/dashboard/Testimonials" component={Testimonials} />
          <Route
            path="/dashboard/PartneringCompanies"
            component={PartneringCompanies}
          />
          <Route path="/dashboard/Addpages" component={AddPages} />
          <Route path="/dashboard/TestimonialAdd" component={TestimonialAdd} />
          <Route path="/dashboard/PartneringAdd" component={PartneringAdd} />
        </Switch>
      </Box>
    </Box>
  );
};

export default Dashboard;
