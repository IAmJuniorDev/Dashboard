import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  ChevronLeft,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import profileImages from "../../images/profile.jpeg";
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customer",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
  {
    text: "Home",
    icon: <ChevronLeft />,
  },
];
const DashboardSidebar = ({
  isSideOpen,
  setIsSideOpen,
  user,
  drawerWidth,
  active,
  setActive,
}) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname,setActive]);
  return (
    <div className="dashboard-sidebar">
      {isSideOpen && (
        <Drawer
          open={isSideOpen}
          onClose={() => setIsSideOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%",
            },
          }}
        >
          <Box width="100%" height="80%">
            <Box p=".5rem">
              <Divider />
              <div
                className="jusbetween"
                sx={{
                  textTransform: "none",
                  gap: "1rem",
                  m: "1.5rem 2rem 0 3rem",
                }}
              >
                <div className="jusbetween">
                  <Box
                    component="img"
                    alt="profile"
                    src={profileImages}
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                  />
                  <Box textAlign="left">
                    <Typography
                      fontWeight="bold"
                      fontSize="0.9rem"
                      pl="1rem"
                      sx={{ color: theme.palette.secondary[100] }}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      fontSize="0.8rem"
                      pl="1rem"
                      sx={{ color: theme.palette.secondary[200] }}
                    >
                      {user.occupation}
                    </Typography>
                  </Box>
                </div>
                <SettingsOutlined
                  sx={{ color: theme.palette.secondary[200], fontSize: "25px" }}
                />
              </div>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "1rem 0 1rem 1rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding padding="1rem auto">
                    <ListItemButton
                      onClick={() => {
                        setActive(lcText);
                      }}
                      sx={{
                        background:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text}>
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </div>
  );
};

export default DashboardSidebar;
