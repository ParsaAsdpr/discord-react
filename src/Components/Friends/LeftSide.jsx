import React from "react";
import ChatSearch from "../ChatScreen/ChatSearch";
import Friend from "./Friend";

const LeftSide = ({ friends }) => {
  return (
    <div className="w-full py-4">
      {friends.length > 0 ? (
        <>
          <div className="px-6">
            <ChatSearch isWide />
          </div>
          <div className="flex flex-col py-6 h-full pr-1 gap-3.5">
            <h2 className="text-[11px] font-bold text-[#bbb] tracking-wider mx-6">
              ONLINE - {friends.length}
            </h2>
            <div className="overflow-y-scroll overflow-x-hidden h-full pr-7 big-scroll">
              {friends.map((friend) => (
                <Friend
                  avatar={friend.avatar}
                  name={friend.name}
                  status={friend.status}
                  key={friend._id}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="h-full flex flex-col gap-12 items-center justify-center text-[#8a8a8a] text-[16px]">
          <img src="/nofriend.svg" alt="" />
          <h2>No one's around to play with Wumpus.</h2>
        </div>
      )}
    </div>
  );
};

export default LeftSide;
