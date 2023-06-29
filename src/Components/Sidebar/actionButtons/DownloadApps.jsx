import React from "react";

const DownloadApps = () => {
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
        className="circleIcon-3489FI"
        aria-hidden="true"
        role="img"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
        ></path>
      </svg>
    </div>
  );
};

export default DownloadApps;
