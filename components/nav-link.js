"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

//create navLink component to have a samller client component instead of having a big client one.
export default function NavLink({ href, children }) {
  const path = usePathname(); // give us the cuurent path

  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
