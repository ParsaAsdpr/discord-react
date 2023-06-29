import React from "react";

const ExploreServers = () => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div
        className={`${
          isActive ? "active bg-[#3BA55D]" : 'bg-[#36393F]'
        } side-icon hover:bg-[#3BA55D] text-white cursor-pointer py-3 px-2.5 w-full duration-200 flex justify-center items-center`}
        onClick={handleClick}
      >
        <svg
          aria-hidden="true"
          role="img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path>
        </svg>
      </div>
      <div className="px-2">
        <div className="w-full border-b-2 border-b-[#373A3F]"></div>
      </div>
    </>
  );
};

export default ExploreServers;
