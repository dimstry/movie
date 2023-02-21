import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center w-full h-20 border-t">
        <p className="text-sm font-bold text-zinc-900 font-shantell">
          Made with ❤️ by{" "}
          <a
            href="dimstry.me"
            className="text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dimas
          </a>
        </p>
      </footer>
    </>
  );
}
