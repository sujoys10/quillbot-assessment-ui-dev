import React, { useEffect, useState } from "react";

export const RatingBar = ({ imdbRating }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Trigger the width update on component mount or when `imdbRating` changes
    setTimeout(() => {
      setWidth(Number(imdbRating) * 10);
    }, 0); // Delay ensures animation triggers after the initial render
  }, [imdbRating]);

  return (
    <div className="rating">
      <div className="rating-bar">
        <div
          className="rating-progress"
          style={{
            width: `${width}%`, // Dynamically set width
          }}
        ></div>
      </div>
      <span>{imdbRating}/10</span>
    </div>
  );
};
