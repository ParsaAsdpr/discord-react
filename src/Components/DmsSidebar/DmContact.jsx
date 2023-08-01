import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

const DmContact = ({ name, avatar, id, status, customStatus }) => {
  const [isActive, setActive] = useState(false);
  const { channelID } = useParams();

  useEffect(() => {
    setActive(channelID === id);
  }, [channelID, id]);

  useEffect(() => {
    setActive(channelID === id);
    return () => {
      setActive(false);
    };
  }, [channelID, id]);

  const navigate = useNavigate();
  return (
    <div
      className={`${
        isActive ? "active bg-[#4f545c99]" : ""
      } py-1.5 px-2.5 items-center flex flex-row select-none justify-between hover:bg-[#4f545c36] w-full cursor-pointer rounded-[3.5px] text-stone-100 font-medium dms-button`}
    >
      <span
        className={`items-center flex flex-row gap-3 w-full text-stone-100 font-medium`}
        onClick={() => navigate(`/channels/@me/${id}`)}
      >
        <span className="h-full">
          <img
            className="rounded-full w-[32px] h-[32px]"
            alt="pfp"
            src={avatar}
          />
        </span>
        <div className="flex flex-col flex-grow gap-[3px]">
          <p className="overflow-ellipsis leading-none text-[16px] whitespace-nowrap overflow-hidden w-3/4">
            {name}
          </p>
          {customStatus && <p className="text-[12.9px] leading-none">{customStatus}</p>}
        </div>
      </span>
      <TfiClose className="text-stone-100 text-xs hover:text-white close-dm hidden" />
    </div>
  );
};

export default DmContact;
