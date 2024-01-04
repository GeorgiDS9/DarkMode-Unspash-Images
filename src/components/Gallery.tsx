import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

// TODO use import.meta.env....
const url = `https://api.unsplash.com/search/photos?client_id={${import.meta.env.VITE_ACCESS_KEY}&query=japan`;

// console.log("URL", url);
console.log("ENV", import.meta.env.VITE_ACCESS_KEY);

const Gallery = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4 style={{textAlign: "center"}}>Loading images...</h4>
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
  console.log("data", data);
  if (data.length < 1) {
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
