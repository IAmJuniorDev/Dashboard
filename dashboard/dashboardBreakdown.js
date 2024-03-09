import Header from "utils/dashboard/header";
import { Box } from "@mui/material";
import BreakdownChart from "utils/dashboard/breakdownChart";
const DashboardBreakdown = () => {
  return (
    <Box className='DashboardBreakdown-container'>
      <Header title="BREAKDOWN" subtitle="Breakdown piechart" />
      <Box mt="20px" height="65vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default DashboardBreakdown;