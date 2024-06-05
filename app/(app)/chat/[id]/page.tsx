import { Message } from "@/const/interfaces/interfaces";
import axiosInstance from "@/libs/api/axiosInstance";
import ChatForm from "@/components/chat/ChatForm";
export const getThreadMessages = async (threadId: string): Promise<Message[]> => { 
  try {
    const response = await axiosInstance.get(`/assistant/messages/${threadId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching thread messages:", error);
    throw error;
  }
};

export default async function IndvidualThreadPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const messages = await getThreadMessages(id);
  return <section className="flex flex-col ">
    <div className="w-full h-[75vh]">
      {messages.length > 0 && messages.map((message) => (
        <div
          key={message.id}
          className="flex flex-col items-start justify-start my-2 p-2 border border-gray-200 rounded-md full mx-auto"
        >
          <div>{message.content[0].text.value}</div>
          <div>{message.created_at}</div>
        </div>
      ))}
    </div>
    <div className="w-full h-[20vh]">
      <div className="flex justify-center items-center">
        <ChatForm />
      </div>
    </div>
  </section>;
}
