import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { getCurrentTimestamp } from "../../../../utils/calculations";

interface ChatMessage {
  message: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatContextType {
  chatlog: ChatMessage[];
  inputText: string;
  setInputText: (text: string) => void;
  handleSendMessage: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [inputText, setInputText] = useState<string>("");
  const [chatlog, setChatlog] = useState<ChatMessage[]>([]);

  const handleSendMessage = async () => {
    if (inputText.trim()) {
      const userTimestamp = getCurrentTimestamp();

      setChatlog((prevChatlog) => [
        ...prevChatlog,
        { message: inputText, isUser: true, timestamp: userTimestamp },
      ]);
      setInputText("");

      try {
        const response = await axios.get(import.meta.env.VITE_CHATBOT_API_URL);

        const { data } = response;
        const botMessage = data.data;
        const botTimestamp = getCurrentTimestamp();

        setChatlog((prevChatlog) => [
          ...prevChatlog,
          { message: botMessage, isUser: false, timestamp: botTimestamp },
        ]);
      } catch (error) {
        console.error("Error fetching the response:", error);
      }
    }
  };

  useEffect(() => {
    const savedChatlog = sessionStorage.getItem("chatlog");
    if (savedChatlog) {
      setChatlog(JSON.parse(savedChatlog));
    }
  }, []);

  useEffect(() => {
    if (chatlog.length > 0) {
      sessionStorage.setItem("chatlog", JSON.stringify(chatlog));
    }
  }, [chatlog]);

  return (
    <ChatContext.Provider
      value={{ chatlog, inputText, setInputText, handleSendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
};
