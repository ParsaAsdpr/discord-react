import React from "react";

const ServerButton = ({ serverName, serverAvatar, href }) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  let words = serverName.split(" ");

  return serverAvatar ? (
    <a
      className={`${
        isActive ? "active " : ""
      }w-full h-[48px] relative rounded-full side-icon`}
      style={{
        backgroundImage: `url(${serverAvatar})`,
        backgroundSize: "100% 100%",
      }}
      href={href}
      onClick={handleClick}
    >
      {isActive && <span className="absolute top-[4px] -left-3 h-10 bg-white w-1 rounded-r-md"></span>}
    </a>
  ) : (
    <a
    href={href}
      className={`${
        isActive ? "active bg-[#5865F2]" : "bg-[#36393F]"
      } side-icon hover:bg-[#5865F2] text-white cursor-pointer ${
        serverAvatar ? "" : "py-3 px-2.5"
      } w-full duration-200 flex flex-row relative justify-center items-center`}
      onClick={handleClick}
    >
      {isActive && <span className="absolute top-[4px] -left-3 h-10 bg-white w-1 rounded-r-md"></span>}
      <p className="overflow-hidden">{words.map((i) => i.split("")[0])}</p>
    </a>
  );
};

export default ServerButton;
