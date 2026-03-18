export default function MessageBubble({ text, sender }) {
  return (
    <div className={`my-2 flex ${sender === "me" ? "justify-end" : "justify-start"}`}>
      <div className="bg-blue-600 px-4 py-2 rounded-xl max-w-xs">
        {text}
      </div>
    </div>
  );
}
