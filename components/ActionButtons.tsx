import Link from "next/link";
export default function ActionButtons() {
  return (
    <>
      <div className="flex gap-10">
        <Link
          href="/movie/search"
          className="px-4 py-2 text-xl font-bold font-shantell rounded-md bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 border-2 border-zinc-900 transition-colors duration-150"
        >
          Cari Movie
        </Link>
        <Link
          href="/movie/tranding"
          className="px-4 py-2 text-xl font-bold font-shantell rounded-md bg-white text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-150"
        >
          Movie Trending
        </Link>
      </div>
    </>
  );
}
