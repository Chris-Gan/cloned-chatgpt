import React from "react";
import ChatInput from "../../../components/ChatInput";
import ChatScreen from "../../../components/ChatScreen";

type Props = {
  params: {
    id: string;
  };
};
const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <ChatScreen chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default ChatPage;
