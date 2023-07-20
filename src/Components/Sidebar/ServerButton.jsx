import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "../common/Tooltip";

const ServerButton = ({ serverName, serverAvatar, href, onFriendsClick, isVerified }) => {
  const [isActive, setActive] = React.useState(false);
  const [IsShown, setIsShown] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
    // onFriendsClick();
  };

  let words = serverName.split(" ");

  return serverAvatar ? (
    <Link
      className={`${
        isActive ? "active " : ""
      }w-full h-[48px] rounded-full side-icon flex flex-row relative justify-center items-center`}
      style={{
        backgroundImage: `url(${serverAvatar})`,
        backgroundSize: "100% 100%",
      }}
      to={href}
      onClick={handleClick}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isActive && (
        <span className="absolute top-[4px] -left-3 h-10 bg-white w-1 rounded-r-md"></span>
      )}
      {IsShown && <Tooltip name={serverName} isVerified={isVerified} />}
    </Link>
  ) : (
    <Link
      to={href}
      className={`${
        isActive ? "active bg-[#5865F2]" : "bg-[#36393F]"
      } side-icon hover:bg-[#5865F2] text-white cursor-pointer ${
        serverAvatar ? "" : "py-3 px-2.5"
      } w-full duration-200 flex flex-row relative justify-center items-center`}
      onClick={handleClick}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isActive && (
        <span className="absolute top-[4px] -left-3 h-10 bg-white w-1 rounded-r-md"></span>
      )}
      <p className="overflow-hidden">{words.map((i) => i.split("")[0])}</p>
      {IsShown && <Tooltip name={serverName} isVerified={isVerified} /> }
    </Link>
  );
};

export default ServerButton;
