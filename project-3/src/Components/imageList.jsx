/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ImageItem from "./imageItem";
import "../styles/imageList.css";
function Imagelist({ images }) {
  return (
    <div className="imageListWrapper">
      {images.map((image, key) => {
        return <ImageItem key={key} value={image} />;
      })}
    </div>
  );
}

export default Imagelist;
