/* eslint-disable react/prop-types */
import "../styles/imageItem.css";
function ImageItem({ value }) {
  return (
    <div className="imageItemWrapper">
      <img src={value.urls.small} alt={value.alt_description} />
    </div>
  );
}

export default ImageItem;
