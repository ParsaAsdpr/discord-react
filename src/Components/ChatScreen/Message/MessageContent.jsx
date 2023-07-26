import React from "react";
import Linkify from "react-linkify";
import DiscordLink from "./DiscordLink";
import Twemoji from "react-twemoji";

const MessageContent = ({ message, attachment, author }) => {
  const isDiscordLink = (link) => {
    return link.startsWith("https://discord.gg");
  };

  // Split the message into separate words
  const words = message.split(" ");

  const containsOnlyEmojis = (text) => {
    const emojiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    return text.match(emojiRegex)?.join("") === text;
  };

  // Function to count the number of emojis in the message content
  const countEmojis = (text) => {
    const emojiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    const emojis = text.match(emojiRegex);
    return emojis ? emojis.length : 0;
  };

  // Check if the message only contains emojis and there are less than six emojis
  const isMessageWithSmallEmojis =
    containsOnlyEmojis(message) && countEmojis(message) < 6;
  return (
    <Twemoji
      options={{
        className: isMessageWithSmallEmojis
          ? "twemoji"
          : "twemoji twemoji-small",
      }}
    >
      <p className=" text-[15px] pt-[1px] message-container">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            {isDiscordLink(word) ? (
              <>
                <Linkify>{word} </Linkify>
                <DiscordLink link={word} author={author} />
              </>
            ) : (
              <Linkify>{word} </Linkify>
            )}
          </React.Fragment>
        ))}
      </p>
      {/* <p className=" text-[15px] pt-[1px] message-container">
        <Linkify>{message}</Linkify>
      </p> */}
      {attachment && (
        <div>
          <img
            src={attachment}
            alt="attachment"
            className="min-w-10 max-w-[200px] h-auto rounded-lg mt-[3px]"
          />
        </div>
      )}
    </Twemoji>
  );
};

export default MessageContent;
