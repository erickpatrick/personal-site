"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ className }: { className?: string }) {
  const activeClass =
    "p-2 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600 font-bold underline underline-offset-8";
  const innactiveClass =
    "p-2 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600";

  const pathname = usePathname();
  return (
    <nav className={`flex justify-center sm:space-x-6 ${className}`}>
      <Link
        className={pathname === "/" ? activeClass : innactiveClass}
        href="/"
      >
        Inicial
      </Link>
      <Link
        className={pathname.includes("/artigos") ? activeClass : innactiveClass}
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
        className={pathname === "/sobre" ? activeClass : innactiveClass}
        href="/sobre"
      >
        Sobre
      </Link>
      <Link
        className={pathname === "/contato" ? activeClass : innactiveClass}
        href="/contato"
      >
        Contato
      </Link>
    </nav>
  );
}
