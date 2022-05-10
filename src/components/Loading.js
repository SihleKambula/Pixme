import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Triangle height='100' width='100' color='cyan' ariaLabel='loading' />
    </div>
  );
}
