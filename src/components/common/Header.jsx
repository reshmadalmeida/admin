import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../../assets/logo.svg";

function Header() {
  return (
    <AppBar
      sx={{ backgroundColor: "#F7F9FD", color: "#404349", boxShadow: "none" }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="Logo" width="85px" height="45px" />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          color="#404349"
          sx={{ cursor: "none", marginLeft: "auto" }}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
