import DashboardProduct from "./dashboardProduct";
import DashboardHome from "./dashboardHome";
import DashboardCustomer from "./dashboardCustomer";
import DashboardTransaction from "./dashboardTransaction";
import DashboardGeography from "./dashboardGeography";
import DashboardOverview from "./dashboardOverview";
import DashboardDaily from "./dashboardDaily";
import DashboardMonthly from "./dashboardMonthly";
import DashboardBreakdown from "./dashboardBreakdown";
import DashboardAdmin from "./dashboardAdmin";
import DashboardPerformance from "./dashboardPerformance";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

const DashboardDetail = ({ active, isSideOpen }) => {
  const theme = useTheme();
  const Navigate = useNavigate();
  const renderComponent = () => {
    switch (active) {
      case "products":
        return <DashboardProduct />;
      case "dashboard":
        return <DashboardHome />;
      case "customer":
        return <DashboardCustomer />;
      case "transactions":
        return <DashboardTransaction />;
      case "geography":
        return <DashboardGeography />;
      case "overview":
        return <DashboardOverview />;
      case "daily":
        return <DashboardDaily />;
      case "monthly":
        return <DashboardMonthly />;
      case "breakdown":
        return <DashboardBreakdown />;
      case "admin":
        return <DashboardAdmin />;
      case "performance":
        return <DashboardPerformance />;
      case "home":
        Navigate("/");
        break;
      default:
        return null;
    }
  };
  return (
    <div
      className="dashboardDetail-container"
      sx={{
        margin: "1.5rem 2.5rem",
      }}
    >
      {renderComponent({ isSideOpen })}
    </div>
  );
};

export default DashboardDetail;
