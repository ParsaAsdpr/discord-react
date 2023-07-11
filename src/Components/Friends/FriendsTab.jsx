import React from "react";
import { Link } from "react-router-dom";

const FriendsTab = ({ text, url }) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <Link
      className={`px-2 rounded-[0.25rem] hover:bg-[#41444b] hover:text-[#ddd] font-medium ${
        isActive ? "bg-[#4b4f57] text-[#eee] cursor-default" : "text-[#a5a5a5]"
      }`}
      to={url}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default FriendsTab;
