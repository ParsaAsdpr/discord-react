import React from "react";

const RolesGroup = ({ role, amount, roleColor }) => {
  return (
    <div className=" mb-6">
      <p className="text-[11.5px] text-gray-400 font-semibold px-3">
        {role.toUpperCase()} - {amount}
      </p>
      <div className="flex items-center gap-1 mt-0.5 py-1.5 hover:bg-[#35373b] cursor-pointer rounded-sm px-3">
        <span className="h-full">
          <img
            className="rounded-full w-[32px] h-[32px]"
            alt="pfp"
            src="/Avatars/danihit.jpeg"
          />
        </span>
        <div className="flex flex-col pl-1.5">
          <p className="text-slate-100 text-[15px]"
          style={{color: roleColor}}
          >Parsa</p>
        </div>
      </div>
    </div>
  );
};

export default RolesGroup;
