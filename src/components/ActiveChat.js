import React from "react";

import { ActionCable } from "react-actioncable-provider";

class ActiveChat extends React.Component {
  componentDidMounth() {
    console.log("%c conencting to websocket", "color: blue");
  }

  handleReceived(resp) {
    console.log("%c response", "color: blue", resp);
  }

  render() {
    console.log("%c this.props.chat", "color: blue", this.props.chat);
    return (
      <div className="active-chat">
        <ActionCable
          channel={{
            chat_id: this.props.chat.id,
            channel: "ChatChannel"
          }}
          onReceived={this.handleReceived}
        >
          {this.props.chat.title}
        </ActionCable>
      </div>
    );
  }
}
export default ActiveChat;
