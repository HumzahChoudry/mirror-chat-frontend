import React from "react";
import Menu from "./Menu";
import ChatList from "./ChatList";
import ActiveChat from "./ActiveChat";
// import RestfulAdapter from "../adapters";

class ChatContainer extends React.Component {
  state = {
    activeChat: null,
    displayModal: false
  };

  selectChat = chat => {
    console.log("%c selecting chat", "color: blue", chat);
    this.setState({ activeChat: chat });
  };

  displayModal = e => {};
  render() {
    return (
      <div className="chat-container">
        <Menu />
        <ChatList
          user={this.props.user}
          chats={this.props.user.chats}
          selectChat={this.selectChat}
        />
        {this.state.activeChat ? (
          <ActiveChat chat={this.state.activeChat} />
        ) : (
          "Select a Chat"
        )}
      </div>
    );
  }
}
export default ChatContainer;
