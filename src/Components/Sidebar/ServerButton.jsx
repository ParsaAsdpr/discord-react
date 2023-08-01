import React from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "../common/Tooltip";

const ServerButton = ({ serverName, id, serverAvatar, href, isVerified }) => {
  const [isActive, setActive] = React.useState(false);
  const [IsShown, setIsShown] = React.useState(false);

  const location = window.location.href
  const urls = location.split("/");
  const serverID = urls[urls.length - 2];

  React.useEffect(() => {
    setActive(serverID === id);
  }, [serverID, id]);

  React.useEffect(() => {
    setActive(serverID === id);
    return () => {
      setActive(false);
    };
  }, [serverID, id]);


  const navigate = useNavigate();

  let words = serverName.split(" ");

  return serverAvatar ? (
    <span
      className={`${
        isActive ? "active " : ""
      }w-full h-[48px] rounded-full side-icon flex flex-row relative justify-center cursor-pointer items-center`}
      style={{
        backgroundImage: `url(${serverAvatar})`,
        backgroundSize: "100% 100%",
      }}
      onClick={() => navigate(href)}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isActive && (
        <span className="absolute top-[4px] -left-3 h-10 bg-white w-1 rounded-r-md"></span>
      )}
      {IsShown && <Tooltip name={serverName} isVerified={isVerified} />}
    </span>
  ) : (
    <span
      className={`${
        isActive ? "active bg-[#5865F2]" : "bg-[#36393F]"
      } side-icon hover:bg-[#5865F2] text-white cursor-pointer ${
        serverAvatar ? "" : "py-3 px-2.5"
      } w-full duration-200 flex flex-row relative justify-center items-center`}
      onClick={() => navigate(href)}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isActive && (
        <span className="absolute top-[4px] -left-3 h-10 bg-white w-1 rounded-r-md"></span>
      )}
      <p className="overflow-hidden">{words.map((i) => i.split("")[0])}</p>
      {IsShown && <Tooltip name={serverName} isVerified={isVerified} /> }
    </span>
  );
};

export default ServerButton;
