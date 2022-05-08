import React from "react";
import { useQuery } from "react-query";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
export default function DetailsPage() {
  const params = useParams();
  const { imageId } = params;
  //todo:remove API key
  const APIkey = "6473511-0417f2cad683f1bee54cafe15";

  //todo:create custom hook for this function
  const getImages = async () => {
    const res = await fetch(
      `https://pixabay.com/api/?key=${APIkey}&id=${imageId}`
    );
    return res.json();
  };

  // using react query for async data fetching and caching
  const { data, isLoading, isError, isSuccess } = useQuery("images", getImages);

  return (
    <Grid container spacing={2}>
      <Grid item xs={10} md={6}>
        <img src={`${data.hits[0].imageURL}`} style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={10} md={6}>
        <Typography>
          Photographer:
          {data.hits[0].user}
        </Typography>
        <Typography>
          Tags:
          {data.hits[0].tags}
        </Typography>
        <Typography>
          Views:
          {data.hits[0].views}
        </Typography>
        <Typography>
          Downloads:
          {data.hits[0].downloads}
        </Typography>
        <Typography>
          Size:
          {(data.hits[0].imageSize * 0.000001).toString().slice(0, 3)}MB
        </Typography>
      </Grid>
    </Grid>
  );
}
