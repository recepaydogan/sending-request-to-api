/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../styles/App.css";
import searchImages from "./callingApi";
import Header from "./headerComponent";
import Imagelist from "./imageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSearch = async (inputValue) => {
    const result = await searchImages(inputValue);
    setImages(result);
  };

  return (
    <div className="wrapper">
      <Header search={handleSearch}></Header>
      <Imagelist images={images} />
    </div>
  );
}

export default App;
