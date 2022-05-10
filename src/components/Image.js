import React from "react";

export default function Image({ imageURL, imageID }) {
  return <img src={`${imageURL}`} style={{ width: "100%" }} alt={imageID} />;
}
