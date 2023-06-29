import React from "react";
import DmsSidebar from "../Components/DmsSidebar/DmsSidebar";
import FriendsHeader from "../Components/Friends/FriendsHeader";

const Friends = () => {
  return (
    <>
      <DmsSidebar />
      <div className="w-full">
        <FriendsHeader />
      </div>
    </>
  );
};

export default Friends;
