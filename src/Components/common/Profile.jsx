import React from "react";
import MiniProfileSection from "./MiniProfileSection";

const Profile = ({ avatar, username, name, tag, aboutMe, created }) => {
  return (
    <div className="fixed -translate-y-1/2 top-1/2 translate-x-1/2 right-1/2 bg-[#232327] w-[32%] z-50 rounded-lg overflow-hidden">
      <div className="h-[107px] w-full bg-black relative">
        <div className="absolute  bg-[#232327] p-1.5 rounded-full top-10 left-5 flex items-center justify-center">
          <div className="rounded-full overflow-hidden relative miniprofile-avatar">
            <img src={avatar} alt="avatar" className="h-[120px] w-[120px]" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between ml-36 mb-7 items-center">
          <div className="bg-[#111214] rounded-md p-[3px] leading-none text-slate-100 flex gap-x-1 justify-center items-center">
            <img src="/Badges/tag.png" alt="" className="w-6 h-6" />
          </div>
          <div className="flex gap-5">
            <button className="py-1.5 px-3.5 text-sm font-semibold text-slate-100 bg-[#2D7D46] rounded-sm">
              Send Friend Request
            </button>
            <button className="flex items-center">
              <p className="rotate-90 text-[26px] leading-none text-slate-200 font-semibold text-center">
                ...
              </p>
            </button>
          </div>
        </div>
        <div className="bg-[#111214] px-3.5 py-2 w-full rounded-lg h-full">
          <div className="flex flex-col">
            <h2 className="text-slate-100 font-semibold text-xl">{username}</h2>
            <p className="text-slate-300 text-[13px]">
              {username}#{tag}
            </p>
          </div>

          <div className="mt-5 flex gap-10 border-b border-b-[#2c2c2c]">
            <div className="text-slate-100 text-sm pb-5 cursor-pointer border-b-2 border-b-transparent hover:border-b-white">
              User Info
            </div>
            <div className="text-slate-100 text-sm pb-5 cursor-pointer border-b-2 border-b-transparent hover:border-b-white">
              Mutual Servers
            </div>
            <div className="text-slate-100 text-sm pb-5 cursor-pointer border-b-2 border-b-transparent hover:border-b-white">
              Mutual Friends
            </div>
          </div>
          <div className="overflow-y-auto w-full p-1 h-full">
            {aboutMe && (
              <MiniProfileSection title={"about me"}>
                <p className="text-[14px] mt-1 font-thin text-zinc-200 mb-3">
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

export default Profile;
