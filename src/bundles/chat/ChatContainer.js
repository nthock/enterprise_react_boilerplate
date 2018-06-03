import React from "react";
import { compose, withState, lifecycle, withProps } from "recompose";
import { Socket } from "phoenix";

const ChatContainer = (props) => {
  const { messages } = props;

  return (
    <div>
      <h3>Chat Container</h3>
      <div>
        <h4>Message</h4>
        { messages.map(message => (
          <div style={{ marginTop: "10px", backgroundColor: "#C4C4C4" }}>
            <p>{message.date} - {message.value}</p>
          </div>
        ))}
      </div>
      <div id="messages"></div>
      <input id="chat-input" type="text"></input>
    </div>
  );
};

const enhance = compose(
  withProps(props => {
    const socket = new Socket(`ws://localhost:3001/socket`, {params: {userToken: "123"}});
    socket.connect();
    const channel = socket.channel("room:lobby", {})
    return { socket, channel }
  }),
  withState("messages", "setMessages", []),
  lifecycle({
    componentDidMount() {
      const { channel, messages, setMessages } = this.props;

      let chatInput         = document.querySelector("#chat-input")
      let messagesContainer = document.querySelector("#messages")

      chatInput.addEventListener("keypress", event => {
        if(event.keyCode === 13){
          channel.push("new_msg", {body: chatInput.value})
          chatInput.value = ""
        }
      });

      channel.on("new_msg", payload => {
        const message = {
          date: Date(),
          value: payload.body
        }
        messages.push(message);
        setMessages(messages);
      });

      channel.join()
        .receive("ok", resp => { console.log("Joined successfully", resp) })
        .receive("error", resp => { console.log("Unable to join", resp) });
    }
  })
)

export default enhance(ChatContainer);
