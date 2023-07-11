import React, { useState } from "react";
import ContextMenu from "../../common/ContextMenu";
import MiniProfile from "../../common/MiniProfile";
import { getUser } from "../../../Constants/MembersDataService";
import Profile from "../../common/Profile";

const FirstMessage = ({ message, roleColor, authorID, attachment, time }) => {
  const initialContextMenu = {
    show: false,
    x: 0,
    y: 0,
  };

  const user = getUser(authorID);

  const refr = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [top, setTop] = React.useState(0);

  function toggleModal(e) {
    setIsOpen(!isOpen);
    setTop(refr.current.offsetTop);
    console.log(user);
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
      className="mt-1 pl-4 hover:bg-[#00000010] py-1"
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
          <img
            className="rounded-full cursor-pointer w-[40px] h-[40px]"
            alt="pfp"
            src={user.avatar}
          />
          {isOpen && (
            <>
              <MiniProfile
                top={top - 50}
                avatar={user.avatar}
                username={user.name}
                tag={user.tag}
                aboutMe={user.about}
                user={user}
                created={user.created}
                onProfileClick={handleProfileClicked}
              ></MiniProfile>
              <div
                className={`w-screen h-screen fixed top-0 right-0 z-10`}
                onClick={toggleModal}
              ></div>
            </>
          )}
        </span>
        <div className="flex flex-col">
          <div className="flex items-center">
            <p
              className=" text-base leading-none pr-2.5"
              style={{ color: roleColor }}
            >
              {user.name}
            </p>
            <p className="text-[11px] text-gray-400 pt-[2px]">{time}</p>
          </div>
          <p className="text-slate-300 text-[15px] pt-[1px]">{message}</p>
        </div>
      </div>
      {isProfileOpen && (
        <>
          <Profile
            avatar={user.avatar}
            username={user.name}
            tag={user.tag}
            aboutMe={user.about}
            created={user.created}
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
