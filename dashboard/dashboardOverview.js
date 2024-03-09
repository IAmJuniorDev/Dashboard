import Header from "utils/dashboard/header";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import { useState } from "react";
import OverviewChart from '../../utils/dashboard/OverviewChart'

const DashboardOverview = () => {
  const [view, setView] = useState("units");
  return (
    <Box className="dashboardOverview-container">
      <Header title="OVERVIEW" subtitle="Overview of general revenue and profit." />
      <Box height="70vh" >
        <FormControl sx={{ mt: "5px" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default DashboardOverview;
