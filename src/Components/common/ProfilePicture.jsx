import React, { useState } from "react";
import GifAvatar from "./GifAvatar";
import Status from "./Status";

const ProfilePicture = ({ staticUrl, dynamicUrl, width, height, className, themeColor, status }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`${className} relative`}
    >
      <div
        className="rounded-full w-full h-full cursor-pointer"
        style={{
          display: isHovering && dynamicUrl ? "none" : "block",
        }}
      >
      <img className="rounded-full w-full h-full" src={staticUrl} alt="pfp" />
      </div>
      {isHovering && dynamicUrl && <GifAvatar url={dynamicUrl} width={width} height={height} />}
      {status && <Status status={status} />}
    </div>
  );
};

export default ProfilePicture;
