import React from "react";

const DmProfileSidebar = ({ avatar, username, tag, created }) => {
  return (
    <div className="bg-[#232428] h-full relative">
      <div className="w-full h-[118px] bg-[#292814]"></div>

      <div className="absolute z-10 bg-[#232327] p-1 rounded-full top-16 left-5 flex items-center justify-center">
        <div className="rounded-full overflow-hidden relative miniprofile-avatar">
          <img src={avatar} alt="avatar" className="h-[80px] w-[80px]" />
        </div>
      </div>

      <div className="relative w-full flex-col px-5">
        <div className="w-full flex justify-between items-center flex-row-reverse py-3">
          <div className="bg-[#111214] rounded-md p-[3px] leading-none text-slate-100 flex gap-x-1 justify-center items-center">
            <img src="/Badges/tag.png" alt="" className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#111214] w-[298px] px-3 py-3 rounded-lg">
          <div className="flex flex-col pb-3 border-b border-b-[#353535]">
            <h2 className="text-slate-100 font-semibold text-xl">{username}</h2>
            <p className="text-slate-300 text-[13px] select-text">
              {username}#{tag}
            </p>
          </div>

          <div className="flex flex-col py-3 border-b border-b-[#353535]">
            <h2 className="text-slate-100 font-bold text-[11px]">
              DISCORD MEMBER SINCE
            </h2>
            <p className="text-slate-300 text-sm select-text pt-1">{created}</p>
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
  );
};

export default DmProfileSidebar;
