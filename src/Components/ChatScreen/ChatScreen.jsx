import React, { createRef, useEffect } from "react";
import FirstMessage from "./Message/FirstMessage";
import SecondMessage from "./Message/SecondMessage";
import DayDivider from "./Message/DayDivider";

const ChatScreen = ({ children }) => {
  let idk = [1, 1, 1, 1, 1, 111, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const EndRef = createRef();
  const scrollToBottom = () => {
    EndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  });
  

  return (
    <div className="w-full h-full relative overflow-hidden mb-2 pr-1">
      <div className="w-full bottom-0 absolute chat-screen overflow-auto max-h-full pt-10">
        <DayDivider />
        <FirstMessage
          username={"Brea"}
          avatar={"/Avatars/Brea.gif"}
          roleColor={"yellow"}
          message={"Fuck FA"}
        />
        <SecondMessage message={"hi"} />
        <FirstMessage
          username={"Parsa"}
          avatar={"/Avatars/danihit.jpeg"}
          roleColor={"#00ff07"}
          message={"stfu donkey turk"}
        />
        {idk.map((idk, index) => (
          <FirstMessage
            key={index}
            username={"Parsa"}
            avatar={"/Avatars/danihit.jpeg"}
            roleColor={"#00ff07"}
            message={"stfu donkey turk"}
          />
        ))}
        <div ref={EndRef}></div>
      </div>
    </div>
  );
};

export default ChatScreen;
