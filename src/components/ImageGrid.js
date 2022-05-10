import React from "react";
import { Grid, ImageList, ImageListItem, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/system";
import Image from "./Image";
export default function ImageGrid({ data }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ display: { md: "none", xs: "block" } }}>
        {data.map((image, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Link to={`${image.id}`} data-testid={`img-${index}`}>
              <Image imageURL={image.imageURL} imageID={image.id} />
            </Link>
          </Grid>
        ))}
      </Grid>
      <ImageList
        variant='masonry'
        cols={3}
        gap={8}
        sx={{ marginTop: "10px", display: { xs: "none", md: "block" } }}
      >
        {data.map((image, index) => (
          <Link to={`${image.id}`} key={index} data-testid={`img-${index}`}>
            <ImageListItem>
              <Image imageURL={image.imageURL} imageID={image.id} />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </ThemeProvider>
  );
}
