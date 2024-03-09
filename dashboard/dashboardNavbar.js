import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
  Button,
  useTheme,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "contexts/dashboardThemeContext";
import profileImage from "images/profile.jpeg";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
const DashboardNavbar = ({ user, setIsSideOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleMenuIconClick = () => {
    setIsSideOpen((prevIsSideOpen) => !prevIsSideOpen);
  };
  return (
    <div className="dashboard-navbar jusbetween">
      <div className="nav-left jusbetween">
        <div>
          <IconButton onClick={handleMenuIconClick}>
            <MenuIcon />
          </IconButton>
        </div>
        <Box
          backgroundColor={theme.palette.background.alt}
          borderRadius="9px"
          p="0 10px"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </Box>
      </div>
      <div className="nav-right jusbetween">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
        <IconButton>
          <SettingsOutlined sx={{ fontSize: "25px" }} />
        </IconButton>
        <Box
          backgroundColor={theme.palette.background.alt}
          className="jusbetween"
          borderRadius="9px"
        >
          <Button
            onClick={handleClick}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "none",
              gap: "1rem",
            }}
          >
            <Box
              component="img"
              alt="profile"
              src={profileImage}
              height="32px"
              width="32px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
            <Box textAlign="left">
              <Typography
                fontWeight="bold"
                fontSize="0.85rem"
                sx={{ color: theme.palette.secondary[100] }}
              >
                {user.name}
              </Typography>
              <Typography
                fontWeight="bold"
                fontSize="0.75rem"
                sx={{ color: theme.palette.secondary[200] }}
              >
                {user.occupation}
              </Typography>
            </Box>
            <ArrowDropDownOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </Box>
      </div>
    </div>
  );
};

export default DashboardNavbar;
