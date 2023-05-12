"use client";
import { useRouter } from "next/navigation";
export default function BackPage() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.back()}
        className="px-3 py-1 text-sm font-bold font-shantell rounded-md bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 border-2 border-zinc-900 transition-colors duration-150"
      >
        Kembali
      </button>
    </>
  );
}
