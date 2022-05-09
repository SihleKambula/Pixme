import React from "react";
import { useQuery } from "react-query";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Information from "../components/Information";
import Loading from "../components/Loading";

export default function DetailsPage() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const { imageId } = params;

  const getImage = async () => {
    const res = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&id=${imageId}`
    );
    return res.json();
  };

  const { data, isLoading, isError } = useQuery("singleImage", getImage);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <p>Something went wrong</p>}
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Grid item xs={10} md={8}>
          <img
            src={`${data.hits[0].imageURL}`}
            style={{ width: "100%" }}
            alt={data.hits[0].id}
          />
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
    </>
  );
}
