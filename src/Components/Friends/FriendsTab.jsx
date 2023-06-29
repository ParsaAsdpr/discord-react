import React from "react";

const FriendsTab = ({ text, url }) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <a
      className={`px-2 rounded-[0.25rem] hover:bg-[#41444b] hover:text-[#ddd] font-medium ${
        isActive ? "bg-[#4b4f57] text-[#eee] cursor-default" : "text-[#a5a5a5]"
      }`}
      href={url}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default FriendsTab;
