import React from "react";
import pixabayContext from "./Pixabaycontext";
import { useEffect, useState } from "react";

const Pixabaystate = (props) => {
  const [imageData, setimageData] = useState([]);
  const [query, setQuery] = useState("london");
  const api_key = "48859386-1806a095308f28a637cb21847";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setimageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&q=category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setimageData(data.hits);
    console.log(data.hits);
  };

  return (
    <pixabayContext.Provider
      value={{ imageData, fetchImageByCategory, setQuery }}
    >
      {props.children}
    </pixabayContext.Provider>
  );
};

export default Pixabaystate;
