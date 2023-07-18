import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import { Link } from "react-router-dom";

const FriendsTab = ({ text, isActive }) => {
  // console.log(isActive)
  return (
    <button
      className={`px-2 rounded-[0.25rem] hover:bg-[#41444b] hover:text-[#ddd] font-medium ${
        isActive ? "bg-[#4b4f57] text-[#eee] cursor-default" : "text-[#a5a5a5]"
      }`}
    >
      {text}
    </button>
  );
};

export default FriendsTab;
