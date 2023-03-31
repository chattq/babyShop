import React, { useRef } from "react";

export default function ImageChangeHover({ primaryImg, secondaryImg }) {
  const imageRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
      ref={imageRef}
      className="w-full h-full ease-in-out"
    />
  );
}
