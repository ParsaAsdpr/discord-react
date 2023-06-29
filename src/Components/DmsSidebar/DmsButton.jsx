import React from "react";

const DmsButton = ({ text, svg }) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <a
      className={`${
        isActive ? "active bg-[#4f545c99]" : ""
      } py-2.5 px-4 items-center relative flex flex-row gap-4 hover:bg-[#4f545c69] rounded-md text-stone-100 font-medium dms-button`}
      onClick={handleClick}
      href="/"
    >
      <span className="h-full">{svg}</span>
      {isActive && (
        <span className="absolute top-[4px] -left-3 h-10 bg-white w-1 rounded-r-md"></span>
      )}
      <p>{text}</p>
    </a>
  );
};

export default DmsButton;
