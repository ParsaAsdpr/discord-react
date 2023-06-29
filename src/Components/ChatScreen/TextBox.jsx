import React from "react";
import { BsEmojiExpressionlessFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import StickerIcon from "../common/Icons/StickerIcon";
import GifIcon from "../common/Icons/GifIcon";
import GiftIcon from "../common/Icons/GiftIcon";

const TextBox = ({ channelName }) => {
  return (
    <div className="w-full py-2 px-4 mb-4">
      <div className="w-full rounded-lg bg-[#383a40] px-4 flex items-center py-2 gap-[15px]">
        <HiPlusCircle className="default-color text-[27px]" />
        <input
          className="outline-none bg-transparent w-full text-slate-200 placeholder:text-gray-500 text-[15px]"
          placeholder={`Message #${channelName}`}
        />
        <GiftIcon className=" default-color" />
        <GifIcon className=" default-color" />
        <StickerIcon className=" default-color" />
        <BsEmojiExpressionlessFill className="text-[28px] default-color" />
      </div>
    </div>
  );
};

export default TextBox;
