import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="mb-8">
        Event Registartion System  
      </h1>
      <Link href="/register">Register</Link>
    </div>
  );
}
