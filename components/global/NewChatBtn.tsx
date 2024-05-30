"use client";
import { useCallback, useState } from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function NewChatButton() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleClick = useCallback(async () => {
    try {
      const resonse = await fetch("/api/create-thread", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!resonse.ok) {
        const errorResponse = await resonse.json();
        throw new Error(
          errorResponse.error ||
            "There was an error while atttempting to create a chat",
        );
      }
      const response = await resonse.json();
      router.push(`/chat/${response.id}`);
    } catch {
      console.error("Error starting chat:", error);
      setError("There was a problem starting the chat. Please try again.");
    }
  }, [router, error]);
  return (
    <div>
      <button
        className="w-1/2 min-h-10 text-blue-900 border-2 border-gray-100 rounded-md text-center flex items-center bg-gray-100"
        onClick={handleClick}
      >
        <div className="w-3/4">Start a new chat</div>
        <div className="w-1/4">
          <ChatBubbleLeftRightIcon className="size-7 text-blue-900" />
        </div>
      </button>
    </div>
  );
}
