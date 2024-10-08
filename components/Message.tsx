import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
const Message = ({ message }: Props) => {
  const isChatGPT = message.user.name === "ChatGPT";
  const chatGPTImage = "/ChatGPT-Icon-Logo-PNG.png";
  const imageRender = isChatGPT ? chatGPTImage : message?.user?.avatar;
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={imageRender} className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
