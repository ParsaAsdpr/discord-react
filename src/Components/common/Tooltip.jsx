import React from "react";
import { motion } from "framer-motion";
import VerifiedIcon from "./Icons/VerifiedIcon";

const Tooltip = ({ name, isVerified }) => {
  console.log(isVerified);
  return (
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.1 }}
      className="absolute flex left-[70px] max-w-[200px] z-50"
    >
      <div className="bg-[#141414] text-slate-200 pt-1.5 pb-2 flex gap-2 justify-center items-center item px-3.5 text-base font-semibold rounded-md whitespace-nowrap relative">
        {isVerified && <VerifiedIcon/>}
        {name}
      <div className="w-0 h-0 border-solid triangle absolute -left-1.5 top-3"></div>
      </div>
    </motion.div>
  );
};

export default Tooltip;
