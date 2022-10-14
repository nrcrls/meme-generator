function Meme() {
  return (
    <main class="mt-7 px-4">
      <div className="grid grid-cols-2 gap-4 md:mx-48 lg:mx-80">
        <input type="text" placeholder="Bottom Text" className="border-2 border-zinc-300 rounded p-2" />
        <input type="text" placeholder="Top Text" className="border-2 border-zinc-300 rounded p-2" />
        <button className="w-full border-0 p-2 bg-sky-300 text-white hover:bg-sky-400 col-span-2 font-space text-lg font-semibold tracking-wider rounded">Get a new meme image</button>
      </div>
    </main>
  );
}

export default Meme;
