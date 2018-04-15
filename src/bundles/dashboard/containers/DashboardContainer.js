import React from "react";
import PropTypes from "prop-types";
import Dashboard from "../components/Dashboard";

const DashboardContainer = ({ currentUser }) => (
  <div>
    <Dashboard />
  </div>
);

DashboardContainer.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    admin: PropTypes.bool,
    super_admin: PropTypes.bool,
    id: PropTypes.string
  }).isRequired
};

export default DashboardContainer;
