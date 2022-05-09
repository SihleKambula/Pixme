import React from "react";
import { Typography } from "@mui/material";
export default function Information({ title, value }) {
  return (
    <Typography>
      <span style={{ color: "gray" }}>{title}</span>

      <br />
      {value}
    </Typography>
  );
}
