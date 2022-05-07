import React from "react";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/system";
export default function ImageGrid({ data }) {
  return (
    <Box sx={{ maxWidth: "1290px" }}>
      <Masonry columns={3} spacing={3} sx={{ marginX: "auto" }}>
        {data.hits.map((hit) => (
          <img
            src={`${hit.imageURL}`}
            alt={hit.id}
            loading='lazy'
            style={{ width: "400px", display: "block" }}
          />
        ))}
      </Masonry>
    </Box>
  );
}
