import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
}&query=dog`;

// console.log("URL", url);
console.log("ENV", import.meta.env.VITE_ACCESS_KEY);

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  return <h2>Gallery</h2>;
};
Gallery.displayName = "Gallery";
export default Gallery;
