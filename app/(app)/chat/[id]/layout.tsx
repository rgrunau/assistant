export default function ChatLayout ({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="p-2">
      
      <section>
        {children}
      </section>
    </div>
  );
}