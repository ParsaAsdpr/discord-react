import React from "react";
import { motion } from "framer-motion";
import MiniProfileSection from "./MiniProfileSection";
import ProfilePicture from "./ProfilePicture";

const MiniProfile = ({
  name,
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
  onProfileClick,
  banner,
  bannerColor,
  themeColor,
}) => {
  return (
    <motion.div
      initial={{ translateX: rolegroup ? -15 : 15 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.2 }}
      className={` ${rolegroup ? "right-64 fixed" : `absolute top-0 left-12`} ${
        themeColor && "p-1"
      } z-50 rounded-md drop-shadow-[0_13px_10px_rgba(0,0,0,0.23)]`}
      style={{
        background: themeColor
          ? `linear-gradient(to bottom, ${themeColor[0]} , ${themeColor[1]})`
          : "#232428",
        top: `${rolegroup ? top + 96 : 0}px`,
      }}
    >
      <div
        className={`p-0 rounded-md overflow-hidden ${className} flex-col ${
          themeColor ? "bg-black  bg-opacity-50" : ""
        }`}
      >
        <div
          className={`${
            banner ? "h-[120px]" : "h-[60px]"
          } w-full bg-black relative`}
        >
          {banner && (
            <img alt="banner" src={banner} className="h-full w-full" />
          )}
        </div>

        <div
          className={`absolute z-0 p-1.5 rounded-full  ${
            banner ? "top-[68px] left-4" : "top-3 left-4"
          } top-16 left-5 flex items-center justify-center`}
          style={{ backgroundColor: themeColor ? themeColor[0] : "#232428" }}
        >
          <div className="h-[80px] w-[80px] rounded-full overflow-hidden relative miniprofile-avatar">
            <div
              className="absolute top-0 right-0 z-50 bg-black bg-opacity-60 hidden items-center justify-center
             w-full h-full text-slate-200 font-bold text-[10px] text-center cursor-pointer miniprofile-overlay"
              onClick={onProfileClick}
            >
              <p>VIEW PROFILE</p>
            </div>
            <img
              src={avatar}
              alt="avatar"
              className="h-full w-full absolute z-40"
            />
            <ProfilePicture
              staticUrl={avatar}
              dynamicUrl={avatar}
              className={"absolute z-40"}
            />
          </div>
          {themeColor && (
            <div className="bg-black bg-opacity-[0.62] absolute top-0 right-0 w-[92px] h-[92px] z- rounded-full"></div>
          )}
        </div>

        <div
          className={`w-[330px] p-4 ${
            themeColor ? "bg-transparent" : "bg-[#232327]"
          } text-white pt-14`}
        >
          <div
            className={`${
              themeColor ? "bg-black bg-opacity-40" : "bg-[#111214]"
            } p-3 w-full rounded-lg`}
          >
            <h2 className="text-slate-100 text-lg font-semibold select-text">
              {name}
            </h2>
            <p className="text-[12px] font-semibold text-slate-200 pb-3 border-b border-b-[#2c2c2c] mb-3 select-text">
              {username}
            </p>
            {aboutMe && (
              <MiniProfileSection title={"about me"}>
                <p className="text-[14px] font-thin text-zinc-200 mb-3 select-text">
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
      </div>
    </motion.div>
  );
};

export default MiniProfile;
