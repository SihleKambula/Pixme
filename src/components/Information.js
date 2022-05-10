import React from "react";
export default function Information({ title, value }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "5px" }}
    >
      <p style={{ color: "gray" }}>{title}</p>
      <p>{value}</p>
    </div>
  );
}
