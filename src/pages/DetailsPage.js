import React from "react";
import { useQuery } from "react-query";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Information from "../components/Information";
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
  const { data, isLoading, isError } = useQuery("images", getImages);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Grid item xs={10} md={8}>
        <img src={`${data.hits[0].imageURL}`} style={{ width: "100%" }} />
      </Grid>
      <Grid
        item
        xs={10}
        md={8}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Information title={"Photography"} value={data.hits[0].user} />
        <Information title={"Tags"} value={data.hits[0].tags} />
        <Information title={"Views"} value={data.hits[0].views} />
        <Information title={"Downloads"} value={data.hits[0].downloads} />
        <Information
          title={"Size"}
          value={`${(data.hits[0].imageSize * 0.000001)
            .toString()
            .slice(0, 3)}MB`}
        />
      </Grid>
    </Grid>
  );
}
