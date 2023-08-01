import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";

const FriendsTab = ({ text, isActive }) => {
  const { friendRequests } = useContext(UserContext);
  return (
    <button
      className={`px-2 rounded-[0.25rem] hover:bg-[#3b3f44] hover:text-[#ddd] font-medium flex items-center 
      gap-2 ${
        isActive ? "bg-[#4b4f57] text-[#eee] cursor-default" : "text-[#a5a5a5]"
      }`}
    >
      <p>{text}</p>
      {text.toLowerCase() === "pending" && (
        <span
          className={
            "text-[11px] font-bold p-[5px] leading-none py-[2.3px] bg-red-500 rounded-full text-white"
          }
        >
          {friendRequests}
        </span>
      )}
    </button>
  );
};

export default FriendsTab;
