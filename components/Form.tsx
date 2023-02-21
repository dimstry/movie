import React from "react";
interface PropsForm {
  handleSubmit: (e: any) => void;
  setSearch: (e: any) => void;
}

export default function Form({ handleSubmit, setSearch }: PropsForm) {
  return (
    <>
      <form
        className="row flex gap-5 justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Masukan judul movie"
          className="px-3 py-2 text-sm font-bold font-shantell rounded-md bg-white text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-150"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="px-3 py-2 text-sm font-bold font-shantell rounded-md bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 border-2 border-zinc-900 transition-colors duration-150"
        >
          Cari
        </button>
      </form>
    </>
  );
}
