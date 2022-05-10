import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <AppBar
      position='static'
      sx={{ alignContent: "center" }}
      color='transparent'
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to='/'>Back</Link>
      </Toolbar>
    </AppBar>
  );
}
