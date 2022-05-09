import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Appbar() {
  return (
    <AppBar
      position='static'
      sx={{ alignContent: "center" }}
      color='transparent'
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant='h5'>Pixme</Typography>
        {/* <Box>
          <InputBase
            sx={{ ml: 1 }}
            placeholder='Search images'
            inputProps={{ "aria-label": "search images" }}
            onChange={(e) => setSearchImage(e.target.value)}
          />
          <IconButton onClick={fetchNewImages}>
            <SearchIcon />
          </IconButton>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}
