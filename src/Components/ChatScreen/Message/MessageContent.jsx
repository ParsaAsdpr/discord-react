import React from "react";
import Linkify from "react-linkify";
import DiscordLink from "./DiscordLink";
import Twemoji from "react-twemoji";
import Tag from "../../common/Tag";

const MessageContent = ({ message, attachment, author }) => {
  const isDiscordLink = (link) => {
    return link.startsWith("https://discord.gg");
  };

  const words = message.split(" ");

  const containsOnlyEmojis = (text) => {
    const emojiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    return text.match(emojiRegex)?.join("") === text;
  };

  const countEmojis = (text) => {
    const emojiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    const emojis = text.match(emojiRegex);
    return emojis ? emojis.length : 0;
  };

  const isMessageWithSmallEmojis =
    containsOnlyEmojis(message) && countEmojis(message) < 6;

  // Function to wrap text inside <Tag> component if "<" and ">" are present
  const wrapWithTagIfPresent = (text) => {
    if (text.includes("<") && text.includes(">")) {
      const parts = text.split(/(<.*?>)/);
      return parts.map((part, index) =>
        part.startsWith("<") && part.endsWith(">") ? (
          <Tag key={index} text={part.slice(1, -1)}></Tag> 
        ) : (
          part
        )
      );
    }
    return text;
  };

  return (
    <Twemoji
      options={{
        className: isMessageWithSmallEmojis
          ? "twemoji"
          : "twemoji twemoji-small",
      }}
    >
      <p className="text-[15px] pt-[1px] message-container">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            {isDiscordLink(word) ? (
              <>
                <Linkify>{wrapWithTagIfPresent(word)} </Linkify>
                <DiscordLink link={word} author={author} />
              </>
            ) : (
              <Linkify>{wrapWithTagIfPresent(word)} </Linkify>
            )}
          </React.Fragment>
        ))}
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
    </Twemoji>
  );
};

export default MessageContent;
