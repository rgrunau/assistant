import NewChatButton from "@/components/global/NewChatBtn";

export default async function DashboardPage() {
  return (
    <>
      <div className="w-full text-center py-4">
        <h1 className="text-2xl"> What you would like to do?</h1>
      </div>
      <div className="w-full px-2 py-4">
        <div className="w-full">
          <h2>Recent Activity</h2>
        </div>
      </div>
      <div className="w-full flex items-center justify-start">
        <NewChatButton />
      </div>
    </>
  );
}
