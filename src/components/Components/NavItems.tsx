"use client";
import { headerLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex flex-col w-full items-start gap-5 md:flex-row">
      {headerLinks?.map((link) => (
        <li
          className={`${pathname === link?.route ? "text-primary-500" : ""
            } flex-center p-medium-16 whitespace-nowrap`}
          key={link?.route}
        >
          <Link href={link?.route}>{link?.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavItems;
