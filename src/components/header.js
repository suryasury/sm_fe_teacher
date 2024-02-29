import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("teacherAccessToken");
    navigate("/login");
  };
  return (
    <AppBar position="sticky" style={{ top: 0, zIndex: 1000 }} color="inherit">
      <Toolbar>
        <img
          src="/static/icon_logo_image.png"
          alt="Logo"
          style={{ margin: "10px", width: "60px", height: "60px" }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VLMHSS
        </Typography>
        <Button
          color="inherit"
          endIcon={<LogoutIcon />}
          style={{ border: "1px solid grey" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
