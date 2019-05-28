import React from "react";

const ChatListItem = props => {
  return (
    <div className="" onClick={() => props.selectChat(props.chat)}>
      {props.chat.title}
    </div>
  );
};

export default ChatListItem;
