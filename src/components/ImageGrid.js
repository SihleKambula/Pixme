import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Image from "./Image";
export default function ImageGrid({ data }) {
  return (
    <Box>
      <ImageList variant='masonry' cols={3} gap={8} sx={{ marginTop: "10px" }}>
        {data.map((image, index) => (
          <Link to={`${image.id}`} key={index} data-testid={`img-${index}`}>
            <ImageListItem>
              <Image imageURL={image.imageURL} imageID={image.id} />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Box>
  );
}
