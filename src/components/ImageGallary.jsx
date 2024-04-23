import React from "react";
import "./ImageGallary.css";

const ImageGallary = ({ newWord }) => {
  return (
    <div>
      <div className="images__wrapper">
        {newWord.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL} target="_blank" rel="noopener noreferrer">
              <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;
