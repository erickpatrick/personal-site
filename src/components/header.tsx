"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const activeClass =
    "p-2 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600 font-bold underline underline-offset-8";
  const innactiveClass =
    "p-2 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600";

  const pathname = usePathname();

  return (
    <div className="p-4 flex justify-between align-center">
      <a href="/" className="group">
        <div className="flex justify-center">
          <div className="flex flex-col text-4xl font-black uppercase origin-center -rotate-6 border-4 border-gray-200 group-hover:border-white transition duration-100 ease-out">
            <h1 className="p-2 bg-transparent text-gray-800 rotate-6 group-hover:bg-gray-800 group-hover:text-white transition duration-200 ease-out delay-100">
              EP
            </h1>
          </div>
        </div>
      </a>
      <nav className="hidden sm:flex py-3 justify-between">
        <Link
          className={pathname === "/" ? activeClass : innactiveClass}
          href="/"
        >
          Inicial
        </Link>
        <Link
          className={
            pathname.includes("/artigos") ? activeClass : innactiveClass
          }
          href="/artigos"
        >
          Artigos
        </Link>
        <Link
          className={
            pathname.includes("/projetos") ? activeClass : innactiveClass
          }
          href="/projetos"
        >
          Projetos
        </Link>
        <Link
          className={pathname === "/contato" ? activeClass : innactiveClass}
          href="/contato"
        >
          Contato
        </Link>
      </nav>

      <a
        className="sm:hidden flex p-4 underline underline-offset-8"
        href="#footer-menu"
      >
        Menu
      </a>
    </div>
  );
}
