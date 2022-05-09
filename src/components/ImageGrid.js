import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";
export default function ImageGrid({ data }) {
  return (
    <ImageList variant='masonry' cols={3} gap={8} sx={{ marginTop: "10px" }}>
      {data.map((image) => (
        <Link to={`${image.id}`} key={image.id}>
          <ImageListItem>
            <img
              src={`${image.imageURL}`}
              srcSet={`${image.imageURL}`}
              alt={`${image.tags}`}
              loading='lazy'
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}
