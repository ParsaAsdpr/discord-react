import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const DmsButton = ({ text, svg, url }) => {
  const [isActive, setActive] = React.useState(false);
  const { friendRequests } = useContext(UserContext);
  const navigate = useNavigate();

  const { channelID } = useParams();

  useEffect(() => {
    !channelID && text.toLowerCase() === "friends" && setActive(true);
  });
  const handleClick = () => {
    navigate(url);
  };

  return (
    <span
      className={`${
        isActive ? "active bg-[#575c613a]" : ""
      } py-2.5 px-4  hover:bg-[#44495046] flex justify-between cursor-pointer select-none items-center rounded-md text-stone-100 font-medium dms-button`}
      onClick={handleClick}
    >
      <div className="items-center relative flex flex-row gap-4">
        <span className="h-full">{svg}</span>
        <p>{text}</p>
      </div>
      {text.toLowerCase() === "friends" && (
        <span
          className={
            "text-[11px] font-bold p-[5px] leading-none py-[2.3px] bg-red-500 rounded-full opacity-1"
          }
          style={{ color: "white" }}
        >
          {friendRequests}
        </span>
      )}
    </span>
  );
};

export default DmsButton;
