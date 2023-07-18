import React from "react";
import DmsSidebar from "../Components/DmsSidebar/DmsSidebar";
import FriendsHeader from "../Components/Friends/FriendsHeader";
import RightSide from "../Components/Friends/RightSide";
import LeftSide from "../Components/Friends/LeftSide";
import UserContext from "../Context/UserContext";

const Friends = () => {
  const [activeTab, setActiveTab] = React.useState('online')
  const {friends} = React.useContext(UserContext);


  return (
    <>
      <DmsSidebar />
      <div className="w-full flex flex-col">
        <FriendsHeader activeTab={activeTab} />
        <div className="flex h-full overflow-hidden">
          <LeftSide friends={friends} />
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Friends;
