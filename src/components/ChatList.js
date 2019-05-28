import React from "react";
import ChatListItem from "./ChatListItem";
import { ActionCable } from "react-actioncable-provider";

const ChatList = props => {
  const renderChats = () => {
    return props.chats.map(c => (
      <ChatListItem chat={c} selectChat={props.selectChat} />
    ));
  };
  const handleReceived = resp => {
    console.log("resp from userChannel", resp);
  };
  return (
    <div className="chat-list">
      <ActionCable
        channel={{
          user_id: props.user.id,
          channel: "UserChannel"
        }}
        onReceived={handleReceived}
      >
        {renderChats()}
      </ActionCable>
    </div>
  );
};

export default ChatList;
