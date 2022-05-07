import { Container } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

export default function HomePage() {
  const APIkey = "6473511-0417f2cad683f1bee54cafe15";
  const getImages = async () => {
    const res = await fetch(`https://pixabay.com/api/?key=${APIkey}&q=wolf`);
    return res.json();
  };

  // using react query for async data fetching and caching
  const { data, isLoading, isError, isSuccess } = useQuery("images", getImages);
  return (
    <Container>
      {isLoading && <p>Loading</p>}
      {isError && <p>Something went wrong</p>}
      {isSuccess &&
        data.hits.map((hit) => (
          <img src={hit.imageURL} alt={hit.id} style={{ width: "200px" }} />
        ))}
    </Container>
  );
}
