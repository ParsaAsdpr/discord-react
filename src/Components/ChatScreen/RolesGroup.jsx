import React from "react";
import MiniProfile from "../common/MiniProfile";
import { getUser } from "../../Constants/MembersDataService";
import Profile from "../common/Profile";
import ProfilePicture from "../common/ProfilePicture";
import Status from "../common/Status";
import { useParams } from "react-router-dom";
import { getServer } from "../../Constants/ServersDataService";

const RolesGroup = ({ role }) => {
  const refr = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const [top, setTop] = React.useState(0);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [userRoles, setUserRoles] = React.useState([]);

  const [user, setUser] = React.useState();
  const { serverID } = useParams();
  const server = getServer(serverID);

  function toggleModal(roleUser) {
    setIsOpen(!isOpen);
    setTop(refr.current.offsetTop);
    setUser(getUser(roleUser._id));
    const member = server.members.find((member) => member._id === roleUser._id);
    setUserRoles(member ? member.roles.map((role) => role) : []);
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
          <span className="h-full relative">
            <ProfilePicture
              staticUrl={member.avatar}
              dynamicUrl={member.dynamicAvatar}
              width={32}
              height={32}
            />
            <Status status={member.status} className="top-[52%] -right-0.5" />
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
            roles={userRoles}
            avatar={user.dynamicAvatar ? user.dynamicAvatar : user.avatar}
            rolegroup={true}
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
            avatar={user.dynamicAvatar ? user.dynamicAvatar : user.avatar}
            name={user.name}
            username={user.username}
            tag={user.tag}
            aboutMe={user.about}
            created={user.created}
            servers={user.servers}
            friends={user.friends}
            id={user._id}
            banner={user.banner}
            bannerColor={user.bannerColor}
            themeColor={user.themeColors}
          />
          <div
            className={`w-screen h-screen fixed top-0 right-0 z-40 bg-black bg-opacity-80`}
            onClick={handleProfileClicked}
          ></div>
        </>
      )}
    </div>
  );
};

export default RolesGroup;
