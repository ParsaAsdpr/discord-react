import React from "react";
import ProfilePicture from "../common/ProfilePicture";

const DmProfileSidebar = ({
  avatar,
  name,
  created,
  tag,
  banner,
  bannerColor,
  themeColors,
  dynamicAvatar
}) => {
  return (
    <div
      className=" h-full relative flex-col"
      style={{
        background: themeColors
          ? `linear-gradient(to bottom, ${themeColors[0]} , ${themeColors[1]})`
          : "#232428",
      }}
    >
      <div
        className={`w-full h-full ${
          themeColors ? "bg-black  bg-opacity-60" : ""
        }`}
      >
        <div
          className={`w-full h-[118px] overflow-hidden flex items-center bg-center bg-cover bg-no-repeat`}
          style={{ background: `${bannerColor} url(${banner})` }}
        ></div>
        <div
          className="absolute z-0 p-1.5 rounded-full top-16 left-5 flex items-center justify-center"
          style={{ backgroundColor: themeColors ? themeColors[0] : "#232428" }}
        >
          <div className="h-[80px] w-[80px] rounded-full overflow-hidden relative miniprofile-avatar">
            <img
              src={avatar}
              alt="avatar"
              className="w-full h-full absolute z-50"
            />
            <ProfilePicture staticUrl={avatar} dynamicUrl={dynamicAvatar} width={80} height={80} className={'absolute z-50'} />
          </div>
          {themeColors && <div className="bg-black bg-opacity-[0.68] absolute top-0 right-0 w-[92px] h-[92px] z-30 rounded-full"></div>}
        </div>

        <div className="relative w-full flex-col px-4">
          <div className="w-full flex justify-between items-center flex-row-reverse py-3">
            <div className="bg-[#111214] rounded-md p-[3px] leading-none text-slate-100 flex gap-x-1 justify-center items-center">
              <img src="/Badges/tag.png" alt="" className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#111214] w-[310px] px-3 py-3 rounded-lg">
            <div className="flex flex-col pb-3 border-b border-b-[#353535]">
              <h2 className="text-slate-100 font-semibold text-xl">{name}</h2>
              <p className="text-slate-200 font-semibold text-[13px] select-text">
                {name}#{tag}
              </p>
            </div>

            <div className="flex flex-col py-3 border-b border-b-[#353535]">
              <h2 className="text-slate-100 font-bold text-[11px]">
                DISCORD MEMBER SINCE
              </h2>
              <p className="text-slate-300 text-sm select-text pt-1">
                {created}
              </p>
            </div>

            <div className="flex flex-col py-3">
              <h3 className="text-[11px] text-slate-200 font-bold">NOTE</h3>
              <textarea
                className="bg-transparent text-zinc-300 text-[11px] pt-2 px-1 w-full resize-none outline-none"
                placeholder="Click to add a note"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DmProfileSidebar;
