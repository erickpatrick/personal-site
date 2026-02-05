"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({
  text,
  href,
  activeClass,
  innactiveClass,
}: {
  text: string;
  href: string;
  activeClass: string;
  innactiveClass: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={pathname === href ? activeClass : innactiveClass}
      href={href}
    >
      {text}
    </Link>
  );
}
