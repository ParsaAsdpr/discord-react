import React from "react";

const RightSide = () => {
  return (
    <div className="w-[35%] border-l border-l-stone-200 border-opacity-5 px-4 py-5">
      <h1 className="text-[19px] font-bold text-slate-200">Active Now</h1>
      <div className="flex flex-col justify-center mt-7">
        <p className="text-[15px] text-slate-100 font-bold text-center">
          It's quiet for now...
        </p>
        <p className="text-[13px] text-[#bbb] text-center px-3 mt-1">
          When a friend starts an activity—like playing a game or hanging out on
          voice—we’ll show it here!
        </p>
      </div>
    </div>
  );
};

export default RightSide;
