import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
}`;

const Gallery = () => {
  const { searchWord } = useGlobalContext();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["images", searchWord], // Addded var here because react query caches it and needs to update it. If the queryKey array doesn't change between component renders, useQuery will return the cached data instead of re-fetching it from the API.
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchWord}`);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4 style={{ textAlign: "center" }}>Loading images...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>;
      </section>
    );
  }

  return (
    <section className="image-container">
      {results?.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};
Gallery.displayName = "Gallery";
export default Gallery;
