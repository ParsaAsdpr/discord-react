import React from "react";
import { Link } from "react-router-dom";

const DmContact = ({ name, avatar, id }) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  return (
    <div className="w-full">
      <Link
        to={`/channels/@me/${id}`}
        className={`${
          isActive ? "active bg-[#4f545c99]" : ""
        } py-1.5 px-3 items-center flex flex-row gap-4 hover:bg-[#4f545c69] w-full rounded-md text-stone-100 font-medium dms-button`}
        onClick={handleClick}
      >
        <span className="h-full">
          <img
            className="rounded-full w-[32px] h-[32px]"
            alt="pfp"
            src={avatar}
          />
        </span>
        <p className="overflow-ellipsis whitespace-nowrap overflow-hidden w-3/4">
          {name}
        </p>
      </Link>
    </div>
  );
};

export default DmContact;
