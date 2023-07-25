import React, { createRef, useEffect } from "react";
import FirstMessage from "./Message/FirstMessage";
import SecondMessage from "./Message/SecondMessage";
import DayDivider from "./Message/DayDivider";
import moment from "moment";
import Twemoji from "react-twemoji";

const ChatScreen = ({ children, messages }) => {
  const EndRef = createRef();
  const scrollToBottom = () => {
    EndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  });

  let now = moment().format("MMM Do YYYY");
  console.log(now);

  return (
    <div className="w-full h-full relative overflow-hidden mb-2 pr-1 z-10 select-text">
      <div className="w-full bottom-0 absolute big-scroll overflow-auto max-h-full pt-10">
        <DayDivider />
        {messages.map((message, index) => (
          <Twemoji options={{ className: "twemoji" }}>
            <FirstMessage
              key={index}
              authorID={message.authorID}
              roleColor={message.rolesColor}
              message={message.content}
              attachment={message.attachment}
              time={message.time}
            />
          </Twemoji>
        ))}
        <div ref={EndRef}></div>
      </div>
    </div>
  );
};

export default ChatScreen;
