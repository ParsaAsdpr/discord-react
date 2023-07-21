import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const BoostGoal = ({ boosters }) => {
  const [maxValue, setMaxValue] = React.useState(0);
  const [level, setLevel] = React.useState(0);

  React.useEffect(() => {
    if (boosters < 2) {
      setLevel(1);
      setMaxValue(2);
    } else if (boosters < 7) {
      setLevel(2);
      setMaxValue(7);
    } else if (boosters <= 15) {
      setLevel(3);
      setMaxValue(15);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-[11px] text-slate-200">
        <p className="font-extrabold">GOAL: LVL {level}</p>
        <div className="text-white text-opacity-[0.65] cursor-pointer flex gap-0.5 items-center">
          <p className="text-[11.75px]">
            {boosters}/{maxValue} Boosts
          </p>{" "}
          <MdKeyboardArrowRight className="text-base" />
        </div>
      </div>
      <div className="pr-1">
        <div className="bg-stone-900 w-full rounded-full overflow-hidden mt-[11px]">
          <div
            className={` py-0.5 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full`}
            style={{ width: `${Math.round((boosters / maxValue) * 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BoostGoal;
