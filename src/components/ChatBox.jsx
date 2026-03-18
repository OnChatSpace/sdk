import { useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hello 👋", sender: "other" },
    { text: "Welcome to OnChat!", sender: "other" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    setMessages([...messages, { text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[80vh] p-4">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}
      </div>

      <div className="flex mt-4">
        <input
          className="flex-1 p-2 rounded-l-lg text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 px-4 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
