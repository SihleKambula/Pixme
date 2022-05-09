import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import ImageGrid from "../components/ImageGrid";
import Appbar from "../components/Appbar";
import Loading from "../components/Loading";
export default function HomePage() {
  const APIkey = "6473511-0417f2cad683f1bee54cafe15";
  const getImages = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `https://pixabay.com/api/?key=${APIkey}&q=wolf&page=${pageParam}`
    );
    return res.json();
  };

  // using react query
  const { data, error, fetchNextPage, hasNextPage, isFetching, status } =
    useInfiniteQuery("images", getImages, {
      getNextPageParam: (lastPage, pages) => {
        /*
      Create next page logic since Pixabay does not have a next page property
      Get the totalHits from the query and divide the totalHits by 20. The API returns 20 images by default.
      This will return the max number of pages we can query through.
      Create the nextPage by incrementing the pages.length for each request.
      */
        const maxPage = lastPage.totalHits / 20;
        const nextPage = pages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
    });

  useEffect(() => {
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      // Do a query search when the client is at the bottom of the page
      if (!isFetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        console.log(isFetching);
        if (hasNextPage) fetchNextPage();
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetching]);

  return (
    <>
      <Appbar />
      {status === "loading" && <Loading />}
      {error && <p>Something went wrong</p>}
      {data &&
        data.pages.map((page, index) => (
          <ImageGrid data={page.hits} key={index} />
        ))}
    </>
  );
}
