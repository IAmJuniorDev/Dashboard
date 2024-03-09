import { useGetUserQuery } from "../../utils/dashboard/api";
import DashboardDetail from "components/dashboard/dashboardDetail";
import DashboardSidebar from "components/dashboard/dashboardSidebar";
import DashboardNavbar from "components/dashboard/dashboardNavbar";
import { themeSettings } from "utils/dashboard/theme";
import {  useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider,Grid } from "@mui/material";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [isSideOpen, setIsSideOpen] = useState(true);
  const [active, setActive] = useState("");
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  const dashboardBackgroundColor = theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[100];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="dashboard-container"
      style={{ backgroundColor: dashboardBackgroundColor }}>
        <Grid container className="dashboardLayout-container">
          <Grid item xs={isSideOpen ? 2 : 0}>
            <DashboardSidebar
              user={data||{}}
              isSideOpen={isSideOpen}
              active={active}
              setActive={setActive}
              setIsSideOpen={setIsSideOpen}
              drawerWidth="250px"
            />
          </Grid>
          <Grid item xs={isSideOpen ? 10 : 12}>
            <Grid container direction="column">
              <Grid item sx={{ p: "0.5rem" }}>
                <DashboardNavbar
                  user={data||{}}
                  isSideOpen={isSideOpen}
                  setIsSideOpen={setIsSideOpen}
                />
              </Grid>
              <Grid item sx={{ p: "1rem 2rem" }}>
                <DashboardDetail
                  active={active}
                  idSideOpen={isSideOpen}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
