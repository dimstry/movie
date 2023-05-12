/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/Movie";

type Params = {
  judul: string;
};

async function getMovieByTitle(title: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${title}}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home({ params }: { params: Params }) {
  const { judul } = params;
  const data = await getMovieByTitle(judul);

  return (
    <>
      <main className="container px-3 md:px-16 py-5 mx-auto min-h-screen">
        <div className="row flex justify-center gap-3">
          <h1 className="text-3xl font-bold text-zinc-900 font-shantell">
            .Mo<span className="text-blue-900">vie</span>:{" "}
          </h1>
          <h2 className="text-2xl font-bold text-zinc-900 font-shantell">
            {judul}
          </h2>
        </div>
        <div className="row flex justify-end gap-3 mt-5">
          <Link
            href="/movie/search"
            className="px-3 py-1 text-sm font-bold font-shantell rounded-md bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 border-2 border-zinc-900 transition-colors duration-150"
          >
            Kembali
          </Link>
        </div>
        <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:px-10 mt-10 pb-16">
          {data?.results.map((movie: Movie) => (
            <div className="card mx-auto" key={movie.id}>
              <div className="img">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.original_title}
                  width={195}
                  height={285}
                  className="rounded-md"
                />
              </div>
              <div className="textBox px-2">
                <p className="text text-sm">
                  {movie.original_title} ({movie.release_date})
                </p>
                <span>
                  <p className="text text-sm">
                    Rating: {movie.vote_average} / 10
                  </p>
                </span>
                <p className="text text-xs">
                  {movie.overview.slice(0, 200) + "..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
