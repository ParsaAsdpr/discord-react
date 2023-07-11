import React from "react";
import { motion } from "framer-motion";
import MiniProfileSection from "./MiniProfileSection";

const MiniProfile = ({
  username,
  avatar,
  badges,
  className,
  top,
  tag,
  aboutMe,
  created,
  rolegroup,
  user,
  onProfileClick
}) => {
  return (
    <>
      <motion.div
        initial={{ translateX: -10 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.2 }}
        className={`p-0 bg-white z-50 ${
          rolegroup ? "right-64 fixed" : `absolute top-0 left-12`
        } rounded-md overflow-hidden ${className} drop-shadow-[0_13px_10px_rgba(0,0,0,0.23)]`}
        style={{ top: `${rolegroup ? top + 96 : 0}px` }}
      >
        <div className="h-[60px] w-full bg-black relative">
          <div className="absolute  bg-[#232327] p-1.5 rounded-full top-2 left-4 flex items-center justify-center">
            <div className="rounded-full overflow-hidden relative miniprofile-avatar">
              <div
                className="absolute top-0 right-0 bg-black bg-opacity-60 hidden items-center justify-center
             w-full h-full text-slate-200 font-bold text-[10px] text-center cursor-pointer miniprofile-overlay"
             onClick={onProfileClick}
              >
                <p>VIEW PROFILE</p>
              </div>
              <img src={avatar} alt="avatar" className="h-20 w-20" />
            </div>
          </div>
        </div>
        <div className="w-[330px] p-4 bg-[#232327] text-white pt-14">
          <div className="bg-[#111214] p-3 w-full rounded-lg">
            <h2 className="text-slate-100 text-lg font-semibold">{username}</h2>
            <p className="text-[12px] font-semibold text-slate-200 pb-3 border-b border-b-[#2c2c2c] mb-3">
              {username}#{tag}
            </p>
            {aboutMe && (
              <MiniProfileSection title={"about me"}>
                <p className="text-[14px] font-thin text-zinc-200 mb-3">
                  {aboutMe}
                </p>
              </MiniProfileSection>
            )}
            <div>
              <h3 className="text-[11px] text-slate-200 font-bold">
                DISCORD MEMBER SINCE
              </h3>
              <p className="text-[14px] pt-1 font-thin text-zinc-200">
                {created}
              </p>
            </div>
            <MiniProfileSection title={"roles"}>
              <div className="flex">
                {user.roles.map((role) => (
                  <div
                    className="px-2 py-0.5 bg-[#232327] rounded-[3px] float-left mr-1 mt-1"
                    key={role._id}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span
                        className={`rounded-full p-[5px]`}
                        style={{ backgroundColor: role.color }}
                      ></span>
                      <p className="text-[12px]">{role.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MiniProfileSection>
            <div className="pt-3">
              <h3 className="text-[11px] text-slate-200 font-bold">NOTE</h3>
              <textarea
                className="bg-transparent text-zinc-300 text-[11px] pt-2 px-1 w-full resize-none outline-none"
                placeholder="Click to add a note"
              />
            </div>
            <input
              className="border border-[#ffffff1a] text-zinc-600 bg-transparent rounded-sm w-full p-3 text-xs outline-none"
              placeholder={`Message @${username}`}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MiniProfile;
