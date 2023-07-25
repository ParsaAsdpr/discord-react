import React from "react";
import Linkify from "react-linkify";

const MessageContent = ({ message, attachment }) => {
  return (
    <div>
      <p className=" text-[15px] pt-[1px] message-container">
        <Linkify>{message}</Linkify>
      </p>
      {attachment && (
        <div>
          <img
            src={attachment}
            alt="attachment"
            className="min-w-10 max-w-[200px] h-auto rounded-lg mt-[3px]"
          />
        </div>
      )}
    </div>
  );
};

export default MessageContent;
