import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const BoostGoal = ({ boosters }) => {
  let level;
  if (boosters < 3) level = 1;
  else if (boosters < 8) level = 2;
  else level = 3;

  const maxBoostsEachLevel = [2, 7, 15];
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-[11px] text-slate-200">
        <p className="font-extrabold">GOAL: LVL {level}</p>
        <div className="text-white text-opacity-[0.65] cursor-pointer flex gap-0.5 items-center">
          <p className="text-[11.75px]">
            {boosters}/{maxBoostsEachLevel[level - 1]} Boosts
          </p>{" "}
          <MdKeyboardArrowRight className="text-base" />
        </div>
      </div>
      <div className="pr-1">
        <div className="bg-stone-900 w-full rounded-full overflow-hidden mt-[11px]">
          <div className="w-3/5 py-0.5 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BoostGoal;
