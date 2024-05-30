"use client";
import { useCallback } from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function NewChatButton() {
  const router = useRouter();
  const handleClick = useCallback(async () => {
    console.log("click");
    try {
      const resonse = await fetch("/api/create-thread", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resonse.ok) {
        const jsonResposne = await resonse.json();
        console.log("response", jsonResposne);
        router.push(`chat/${jsonResposne}`);
      }
    } catch {}
  }, [router]);
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
