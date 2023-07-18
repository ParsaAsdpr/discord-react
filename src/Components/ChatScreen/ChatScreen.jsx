import React, { createRef, useEffect } from "react";
import FirstMessage from "./Message/FirstMessage";
import SecondMessage from "./Message/SecondMessage";
import DayDivider from "./Message/DayDivider";
import { getMessages } from "../../Constants/ChannelsDataService";
import moment from 'moment';

const ChatScreen = ({ children }) => {
  
  const channelID = window.location.toString().split('/').slice(-1).toString();
  const messages = getMessages(channelID)

  const EndRef = createRef();
  const scrollToBottom = () => {
    EndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  });
  
  let now = moment().format("MMM Do YYYY");
  console.log(now)

  return (
    <div className="w-full h-full relative overflow-hidden mb-2 pr-1">
      <div className="w-full bottom-0 absolute big-scroll overflow-auto max-h-full pt-10">
        <DayDivider />
        {messages.map((message, index) => (
          <FirstMessage
            key={index}
            authorID={message.authorID}
            roleColor={message.rolesColor}
            message={message.content}
            attachment={message.attachment}
            time={message.time}
          />
        ))}
        <div ref={EndRef}></div>
      </div>
    </div>
  );
};

export default ChatScreen;
