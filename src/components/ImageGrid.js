import React from "react";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/system";
import Appbar from "./Appbar";

export default function ImageGrid({ data }) {
  return (
    <Box sx={{ width: "100%", maxWidth: "1290px" }}>
      <Appbar />
      <Masonry
        columns={3}
        spacing={3}
        sx={{ marginX: "auto", paddingTop: "20px" }}
      >
        {data.hits.map((hit) => (
          <img
            key={hit.id}
            src={`${hit.imageURL}`}
            alt={hit.id}
            style={{ width: "400px", display: "block" }}
          />
        ))}
      </Masonry>
    </Box>
  );
}
