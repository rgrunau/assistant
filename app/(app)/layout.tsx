import Header from "@/components/global/Header";
import "./app-layout.css";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout p-2">
      <Header />
      <section className="main-section">{children}</section>
    </div>
  );
}
