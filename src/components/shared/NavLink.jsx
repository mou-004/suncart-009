"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link
      href={href}
      className={`${isActive ? "text-orange-600 border-b-2 border-orange-500 pb-1" : "text-slate-600 hover:text-orange-500 transition-colors"} font-semibold`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
