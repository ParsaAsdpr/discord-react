import React, { createRef, useEffect } from "react";
import FirstMessage from "./Message/FirstMessage";
import SecondMessage from "./Message/SecondMessage";
import DayDivider from "./Message/DayDivider";
import moment from "moment";

const ChatScreen = ({ children, messages }) => {
  const EndRef = createRef();
  const scrollToBottom = () => {
    EndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  });

  const formatDate = (timestamp) => {
    return moment.unix(timestamp).format("MMMM DD [,] YYYY");
  };

  const groupedMessages = messages.reduce((acc, message) => {
    const date = formatDate(message.time);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {});

  const shouldRenderSecondMessage = (currentMessage, nextMessage) => {
    if (!nextMessage) return false;

    const currentAuthorID = currentMessage.authorID;
    const nextAuthorID = nextMessage.authorID;

    const currentTime = moment.unix(currentMessage.time);
    const nextTime = moment.unix(nextMessage.time);

    const isSameAuthor = currentAuthorID === nextAuthorID;
    const isWithin10Minutes =
      nextTime.diff(currentTime, "minutes") < 10 &&
      nextTime.diff(currentTime, "days") === 0;

    if (isSameAuthor && isWithin10Minutes) {
      const messagesInBetween = messages.slice(
        messages.indexOf(currentMessage) + 1,
        messages.indexOf(nextMessage)
      );
      const hasOtherUsersMessages = messagesInBetween.some(
        (message) => message.authorID !== currentAuthorID
      );

      return !hasOtherUsersMessages;
    }

    return false;
  };

  return (
    <div className="w-full h-full relative overflow-hidden mb-2 pr-1 z-10 select-text">
      <div className="w-full bottom-0 absolute big-scroll overflow-auto max-h-full pt-10">
        {Object.entries(groupedMessages).map(([date, messagesForDate]) => (
          <React.Fragment key={date}>
            <DayDivider date={date} />
            {messagesForDate.map((message, index) => (
              <>
                {index === 0 ? (
                  <FirstMessage
                    authorID={message.authorID}
                    roleColor={message.rolesColor}
                    message={message.content}
                    attachment={message.attachment}
                    time={message.time}
                  />
                ) : shouldRenderSecondMessage(
                    messagesForDate[index - 1],
                    message
                  ) ? (
                  <SecondMessage message={message.content} />
                ) : (
                  <FirstMessage
                    authorID={message.authorID}
                    roleColor={message.rolesColor}
                    message={message.content}
                    attachment={message.attachment}
                    time={message.time}
                  />
                )}
              </>
            ))}
          </React.Fragment>
        ))}

        <div ref={EndRef}></div>
      </div>
    </div>
  );
};

export default ChatScreen;
