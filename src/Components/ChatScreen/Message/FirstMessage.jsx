import React, { useEffect, useState } from "react";
import ContextMenu from "../../common/ContextMenu";
import MiniProfile from "../../common/MiniProfile";
import { getUser } from "../../../Constants/MembersDataService";
import Profile from "../../common/Profile";
import MessageActions from "./MessageActions";
import ProfilePicture from "../../common/ProfilePicture";
import MessageContent from "./MessageContent";
import { formatDate } from "../../../utils/FormatDate";
import { useParams } from "react-router-dom";
import { getServer } from "../../../Constants/ServersDataService";

const FirstMessage = ({ message, authorID, attachment, time }) => {
  const initialContextMenu = {
    show: false,
    x: 0,
    y: 0,
  };
  const [userRoles, setUserRoles] = useState([]);

  const user = getUser(authorID);

  const { serverID } = useParams();
  React.useEffect(() => {
    if (serverID !== "@me") {
      const server = getServer(serverID);
      const member = server.members.find((member) => member._id === authorID);
      setUserRoles(member ? member.roles.map((role) => role) : []);
    }
  }, [serverID]);
  const refr = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [top, setTop] = React.useState(0);

  function toggleModal(e) {
    setIsOpen(!isOpen);
    setTop(refr.current.offsetTop);
  }

  const [contextMneu, setContextMenu] = useState(initialContextMenu);

  const handleContextMenu = (e) => {
    e.preventDefault();

    const { pageX, pageY } = e;
    setContextMenu({ show: true, x: pageX, y: pageY });
  };

  const handleProfileClicked = () => {
    setIsOpen(false);
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div
      className="mt-1 pl-[18px] hover:bg-[#00000010] pt-1 pb-0.5 relative"
      onContextMenu={handleContextMenu}
    >
      {contextMneu.show && (
        <ContextMenu x={contextMneu.x} y={contextMneu.y}></ContextMenu>
      )}
      <div className="flex">
        <span
          className="h-full pr-[14px] select-none relative"
          onClick={toggleModal}
          ref={refr}
        >
          <ProfilePicture
            staticUrl={user.avatar}
            dynamicUrl={user.dynamicAvatar}
            width={40}
            height={40}
          />
          {isOpen && (
            <>
              <MiniProfile
                top={top - 50}
                user={user}
                avatar={user.dynamicAvatar ? user.dynamicAvatar : user.avatar}
                roles={userRoles}
                onProfileClick={handleProfileClicked}
              ></MiniProfile>
              <div
                className={`w-screen h-screen fixed top-0 right-0 z-10`}
                onClick={toggleModal}
              ></div>
            </>
          )}
        </span>
        <div className="flex flex-col select-text">
          <div className="flex items-center">
            <p
              className=" text-base leading-none pr-2.5 hover:underline cursor-pointer"
              style={{
                color: userRoles.length > 0 ? userRoles[0].color : "#eeeeee",
              }}
              onClick={toggleModal}
            >
              {user.name}
            </p>
            <p className="text-[11px] text-gray-400 pt-[2px]">
              {formatDate(time)}
            </p>
          </div>
          <MessageContent
            message={message}
            attachment={attachment}
            author={user}
          />
        </div>
      </div>
      {/* <MessageActions /> */}
      {isProfileOpen && (
        <>
          <Profile
            avatar={user.dynamicAvatar ? user.dynamicAvatar : user.avatar}
            name={user.name}
            username={user.username}
            tag={user.tag}
            aboutMe={user.about}
            created={user.created}
            id={user._id}
            banner={user.banner}
            bannerColor={user.bannerColor}
            themeColor={user.themeColors}
          />
          <div
            className={`w-screen h-screen fixed top-0 right-0 z-10 bg-black bg-opacity-80`}
            onClick={handleProfileClicked}
          ></div>
        </>
      )}
    </div>
  );
};

export default FirstMessage;
