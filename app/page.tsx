import ActionButtons from "@/components/ActionButtons";
import Image from "next/image";
import Benner from "../public/assets/Benner.svg";

export default function Home() {
  return (
    <>
      <main className="container px-2 md:px-16 py-5 mx-auto">
        <div className="row">
          <h1 className="text-3xl font-bold text-zinc-900 font-shantell">
            .Mo<span className="text-blue-900">vie</span>
          </h1>
        </div>
        <div className="row flex flex-col items-center gap-16">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-zinc-900 font-shantell">
              Selamat Datang
            </h2>
            <p className="text-xl font-bold text-zinc-600 font-shantell">
              Silahkan pilih menu di bawah
            </p>
          </div>
          <Image src={Benner} alt="Benner" width={300} height={300} />
          <ActionButtons />
        </div>
      </main>
    </>
  );
}
