import axiosInstance from "@/libs/api/axiosInstance";
export const getThreadMessages = async (threadId: string) => { 
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
  console.log(messages);
  console.log(messages[0].content?.text?.value)
  return <section className="flex flex-col ">
    <div className="w-full h-[80vh]">
      {messages.length > 0 && messages.map((message) => (
        <div key={message.id}>
          <div>{message.content[0].text.value}</div>
          <div>{message.created_at}</div>
        </div>
      ))}
    </div>
    <div className="w-full h-[20vh]">
      <div className="flex justify-center items-center">
        input here
      </div>
    </div>
  </section>;
}
