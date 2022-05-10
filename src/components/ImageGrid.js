import React from "react";
import {
  Grid,
  ImageList,
  ImageListItem,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, useTheme } from "@mui/system";
import Image from "./Image";

export default function ImageGrid({ data }) {
  const theme = useTheme();
  // returns true if breakpoint is sm and up, otherwise false
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ImageList
      variant='masonry'
      cols={matches ? 3 : 1}
      gap={8}
      sx={{ marginTop: "10px" }}
    >
      {data.map((image, index) => (
        <Link to={`${image.id}`} key={index} data-testid={`img-${index}`}>
          <ImageListItem>
            <Image imageURL={image.imageURL} imageID={image.id} />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}
