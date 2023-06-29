import React from "react";

const AddServer = () => {
    const [isActive, setActive] = React.useState(false);
    const handleClick = () => {
      setActive(!isActive);
    };
  return (
    <div
      className={`${
        isActive ? "active bg-[#3BA55D]" : 'bg-[#36393F]'
      } side-icon hover:bg-[#3BA55D] text-white cursor-pointer py-3 px-2.5 w-full duration-200 flex justify-center items-center`}
      onClick={handleClick}
    >
      <svg
        className="w-full"
        aria-hidden="true"
        role="img"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
        ></path>
      </svg>
    </div>
  );
};

export default AddServer;
