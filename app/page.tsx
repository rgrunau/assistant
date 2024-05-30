import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-4/5 text-center">
        <h1 className="text-3xl">{"Hello Bob, I'm ZEE, your assistant"}</h1>
      </div>
      <div className="w-4/5 mt-10 flex items-center justify-center">
        <Link
          className="rounded-2xl w-44 h-11 text-blue-900 bg-white text-center py-3"
          href="/sign-in"
        >
          Log In
        </Link>
      </div>
    </section>
  );
}
