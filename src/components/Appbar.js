import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Appbar() {
  const [searchImage, setSearchImage] = useState("");
  const fetchNewImages = () => {
    console.log(searchImage);
  };
  return (
    <AppBar
      position='static'
      sx={{ alignContent: "center" }}
      color='transparent'
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant='h5'>Pixme</Typography>
        <Box>
          <InputBase
            sx={{ ml: 1 }}
            placeholder='Search images'
            inputProps={{ "aria-label": "search images" }}
            onChange={(e) => setSearchImage(e.target.value)}
          />
          <IconButton onClick={fetchNewImages}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
