import "./chat.scss";
const Chat = ({ trigger, setTrigger, children }) => {
  return trigger ? (
    <div className="chat">
      <div className="chatPop">{children}</div>
    </div>
  ) : (
    ""
  );
};
export default Chat;
