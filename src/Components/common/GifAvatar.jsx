import React from "react";

const GifAvatar = ({ url, width, height }) => {
  return (
    <div
      className={`rounded-full w-[${width}px] h-[${height}px] cursor-pointer`}
      style={{
      }}
    >
      <img alt="pfp" src={url} className="rounded-full w-full h-full" />
    </div>
  );
};

export default GifAvatar;
