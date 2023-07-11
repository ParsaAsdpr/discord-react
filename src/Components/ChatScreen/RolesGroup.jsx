import React from "react";
import MiniProfile from "../common/MiniProfile";
import { getUser } from "../../Constants/MembersDataService";
import Profile from "../common/Profile";

const RolesGroup = ({ role, members, roles, roleColor }) => {
  const refr = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const [top, setTop] = React.useState(0);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  const [user, setUser] = React.useState();

  function toggleModal(member) {
    setIsOpen(!isOpen);
    setTop(refr.current.offsetTop);
    setUserData(member);
    setUser(getUser(member._id));
  }

  const handleProfileClicked = () => {
    setIsOpen(false);
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className={` mb-6 ${role.members.length === 0 && "hidden"}`}>
      <p className="text-[11.5px] text-gray-400 font-semibold px-3 select-none">
        {role.name.toUpperCase()} - {role.members.length}
      </p>
      {role.members.map((member) => (
        <div
          className="flex items-center gap-1 mt-0.5 py-1.5 hover:bg-[#35373b] cursor-pointer rounded-sm px-3 relative select-none"
          onClick={() => toggleModal(member)}
          ref={refr}
          key={member._id}
        >
          <span className="h-full">
            <img
              className="rounded-full w-[32px] h-[32px]"
              alt="pfp"
              src={member.avatar}
            />
          </span>
          <div className="flex flex-col pl-1.5">
            <p
              className="text-slate-100 text-[15px]"
              style={{ color: role.color }}
            >
              {member.name}
            </p>
          </div>
        </div>
      ))}
      {isOpen && (
        <>
          <MiniProfile
            top={top - 50}
            user={user}
            avatar={userData.avatar}
            username={userData.name}
            tag={userData.tag}
            aboutMe={userData.about}
            rolegroup={true}
            created={userData.created}
            onProfileClick={handleProfileClicked}
          ></MiniProfile>
          <div
            className={`w-screen h-screen fixed top-0 right-0 z-10`}
            onClick={toggleModal}
          ></div>
        </>
      )}
      {isProfileOpen && (
        <>
          <Profile
            avatar={userData.avatar}
            username={userData.name}
            tag={userData.tag}
            aboutMe={userData.about}
            created={userData.created}
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

export default RolesGroup;
