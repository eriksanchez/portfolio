import React from "react";

export const Image = () => {
  return (
    <div>
      <h4>Gallary</h4>

      <img
        width="600"
        height="600"
        src={"/logo192.png"}
        alt="random1"
        className="skewElem"
      />
      <img
        width="600"
        height="600"
        src={"/JavascriptImage.png"}
        alt="javascript"
        className="skewElem"
      />
      <img
        width="600"
        height="600"
        src={"/logo512.png"}
        alt="random3"
        className="skewElem"
      />
    </div>
  );
};
