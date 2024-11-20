import Image from "next/image";

export default function Home() {
  return (
      <main className="flex justify-start items-start w-screen h-screen overflow-hidden">
        <div className="w-12 h-full border-r border-zinc-700 bg-zinc-900"></div>
        <div className="w-96 h-full"></div>
        <div className="w-full h-full border-l border-zinc-700 bg-zinc-900 px-4 pt-8">
          <div className="flex flex-col gap-1">
            <input type="text" placeholder="Title..." className="text-3xl font-bold placeholder:text-3xl placeholder:font-bold placeholder:text-zinc-500 text-zinc-100 bg-transparent py-2 outline-none border-none"/>
            <input type="text" placeholder="Body..." className="bg-transparent outline-none border-none placeholder:font-medium text-zinc-100 py-2" />
          </div>
        </div>
      </main>
  );
}
