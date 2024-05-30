"use client";
import { useCallback } from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function NewChatButton() {
  const handleClick = useCallback(async () => {}, []);
  return (
    <button
      className="w-1/2 min-h-10 text-blue-900 border-2 border-gray-100 rounded-md text-center flex items-center bg-gray-100"
      onClick={handleClick}
    >
      <div className="w-3/4">Start a new chat</div>
      <div className="w-1/4">
        <ChatBubbleLeftRightIcon className="size-7 text-blue-900" />
      </div>
    </button>
  );
}
