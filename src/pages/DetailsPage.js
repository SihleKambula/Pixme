import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Information from "../components/Information";
import Loading from "../components/Loading";
import Image from "../components/Image";
import Appbar from "../components/Appbar";

export default function DetailsPage() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const { imageId } = params;
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&id=${imageId}`
      );
      setImage(await res.json());
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
  return (
    <>
      <Appbar />
      {isLoading && <Loading />}
      {isError && <p>Something went wrong</p>}
      {image && (
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Grid item xs={10} md={8}>
            <Image
              imageURL={image.hits[0].imageURL}
              imageID={image.hits[0].id}
            />
          </Grid>
          <Grid
            item
            xs={10}
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Information title={"Photography"} value={image.hits[0].user} />
            <Information title={"Tags"} value={image.hits[0].tags} />
            <Information title={"Views"} value={image.hits[0].views} />
            <Information title={"Downloads"} value={image.hits[0].downloads} />
            <Information
              title={"Size"}
              value={`${(image.hits[0].imageSize * 0.000001)
                .toString()
                .slice(0, 3)}MB`}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
