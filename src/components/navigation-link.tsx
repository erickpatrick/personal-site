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
  const hrefParts = href.split("/");

  const activevateClass =
    hrefParts.length > 2 ? pathname.startsWith(href) : pathname === href;

  return (
    <Link
      className={activevateClass ? activeClass : innactiveClass}
      href={href}
    >
      {text}
    </Link>
  );
}
