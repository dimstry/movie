import Head from "next/head";
import React, { useState } from "react";
const Search = require("@/public/assets/Search.svg");
import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default function Home() {
  const [search, setSearch] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = `/movies/search/${search}`;
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Cari informasi movie secara gratis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container px-5 md:px-16 py-5 mx-auto space-y-3">
        <div className="row flex justify-between">
          <Link
            href="/"
            className="text-3xl font-bold text-zinc-900 font-shantell"
          >
            .Mo<span className="text-blue-900">vie</span>
          </Link>
          <Link
            href="/movies/tranding"
            className="px-5 md:px-4 py-2 text-sm font-bold font-shantell rounded-md bg-white text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-150"
          >
            Movie Trending
          </Link>
        </div>
        <Image
          src={Search}
          alt="Search"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div className="row flex flex-col items-center">
          <p className="text-xl font-bold text-zinc-600 font-shantell">
            Silahkan masukan judul movie yang mau di cari
          </p>
        </div>
        <Form handleSubmit={handleSubmit} setSearch={setSearch} />
      </main>
    </>
  );
}
