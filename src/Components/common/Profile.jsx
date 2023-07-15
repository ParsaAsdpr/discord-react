import React, { useContext, useEffect, useState } from "react";
import MiniProfileSection from "./MiniProfileSection";
import { motion } from "framer-motion";
import UserContext from "../../Context/UserContext";
import { Link } from "react-router-dom";

const Profile = ({
  avatar,
  username,
  name,
  tag,
  aboutMe,
  created,
  id,
  servers,
  friends,
}) => {
  const { _id } = useContext(UserContext);
  const [notUser, setNotUser] = useState(true);
  const [activeTab, setActiveTab] = useState("User Info");

  const handleTabClick = (tab) => {
    if (tab === activeTab) return null;
    else setActiveTab((prevTab) => (prevTab !== tab ? tab : prevTab));
  };

  useEffect(() => {
    _id === id ? setNotUser(false) : setNotUser(true);
  }, [id]);

  return (
    <motion.div
      initial={{ scale: 0.25 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-1/2 right-1/2 bg-[#232327] w-[31%] z-50 rounded-[10px] overflow-hidden select-none"
      style={{ translateX: "50%", translateY: "-50%" }}
    >
      <div className="h-[107px] w-full bg-black relative">
        <div className="absolute  bg-[#232327] p-1.5 rounded-full top-10 left-5 flex items-center justify-center">
          <div className="rounded-full overflow-hidden relative miniprofile-avatar">
            <img src={avatar} alt="avatar" className="h-[120px] w-[120px]" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between ml-36 mb-7 items-center">
          <div className="bg-[#111214] rounded-md p-[3px] leading-none text-slate-100 flex gap-x-1 justify-center items-center">
            <img src="/Badges/tag.png" alt="" className="w-6 h-6" />
          </div>
          {notUser && (
            <div className="flex gap-5">
              <button className="py-1.5 px-3.5 text-sm font-semibold text-slate-100 bg-[#2D7D46] hover:bg-[#206135] transition rounded-sm">
                Send Friend Request
              </button>
              <button className="flex items-center">
                <p className="rotate-90 text-[26px] leading-none text-slate-200 font-semibold text-center">
                  ...
                </p>
              </button>
            </div>
          )}
        </div>
        <div className="bg-[#111214] px-3 py-2 w-full rounded-lg h-full">
          <div className="flex flex-col">
            <h2 className="text-slate-100 font-semibold text-xl">{username}</h2>
            <p className="text-slate-300 text-[13px] select-text">
              {username}#{tag}
            </p>
          </div>

          {notUser ? (
            <div className="mt-5 flex gap-10 border-b border-b-[#353535]">
              {["User Info", "Mutual Servers", "Mutual Friends"].map((item) => (
                <div
                  className={`text-slate-100 text-sm pb-5 cursor-pointer border-b-2 ${
                    activeTab === item
                      ? "border-b-white"
                      : "border-b-transparent"
                  } hover:border-b-white`}
                  onClick={() => handleTabClick(item)}
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div className="border-b border-b-[#353535] mt-5 mb-1"></div>
          )}

          {(() => {
            if (activeTab === "User Info")
              return (
                <div className="overflow-y-auto w-full p-1 h-64">
                  {aboutMe && (
                    <MiniProfileSection title={"about me"}>
                      <p className="text-[14px] mt-1 font-thin text-zinc-200 mb-3 select-text">
                        {aboutMe}
                      </p>
                    </MiniProfileSection>
                  )}
                  <MiniProfileSection title={"discord member since"}>
                    <p className="text-[14px] mt-1 font-thin text-zinc-200 mb-3">
                      {created}
                    </p>
                  </MiniProfileSection>
                  <div className="pt-2 pb-7">
                    <h3 className="text-[11px] text-slate-200 font-bold">
                      NOTE
                    </h3>
                    <textarea
                      className="bg-transparent text-zinc-300 text-[11px] pt-2 px-1 w-full resize-none outline-none"
                      placeholder="Click to add a note"
                    />
                  </div>
                </div>
              );
            else if (activeTab === "Mutual Servers")
              return (
                <div className="flex flex-col h-64 overflow-y-auto">
                  {servers.map((server) => (
                    <Link
                      to={`/channels/${server._id}/${server.defaultChannel}`}
                      className="w-full flex gap-2 mb-1 py-1 px-1 mt-3.5 items-center hover:bg-[#ffffff15] cursor-pointer rounded-[4px]"
                    >
                      <img
                        src={server.icon}
                        alt={server.name}
                        className="w-10 h-10 rounded-xl"
                      />
                      <p className="text-stone-200 text-[16px]">
                        {server.name}
                      </p>
                    </Link>
                  ))}
                </div>
              );
            else if (activeTab === "Mutual Friends")
              return (
                <div className="flex flex-col h-64 overflow-y-auto">
                  {friends.length <= 0 ? (
                    <div className="flex flex-col justify-center items-center h-full">
                      <img src="/nofriend.svg" alt="" className="h-auto w-50" />
                      <p className="text-stone-300 text-[13px] pt-2">
                        NO FRIENDS IN COMMON
                      </p>
                    </div>
                  ) : (
                    friends.map((friend) => (
                      <div className="w-full flex gap-2 mb-1 py-1 px-1 mt-3.5 items-center hover:bg-[#ffffff15] cursor-pointer rounded-[4px]">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-10 h-10 rounded-xl"
                        />
                        <p className="text-stone-200 text-[16px]">
                          {friend.name}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              );
          })()}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
