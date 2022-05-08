import React from "react";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/system";
import { ImageList, ImageListItem } from "@mui/material";

export default function ImageGrid({ data }) {
  console.log(data);
  return (
    <ImageList variant='masonry' cols={3} gap={8} sx={{ marginTop: "10px" }}>
      {data.hits.map((image) => (
        <ImageListItem key={image.id}>
          <img
            src={`${image.imageURL}`}
            srcSet={`${image.imageURL}`}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
