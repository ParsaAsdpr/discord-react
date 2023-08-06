import React from "react";

const Tag = ({ text }) => {
  return (
    <span className="py-[0.5px] px-[1px] tag-bg font-semibold cursor-pointer">
      {!text.startsWith("#") && <span className="text-[19px]">@</span>}
      {text}
    </span>
  );
};

export default Tag;
