"use client";

import { AiOutlineHome } from "react-icons/ai";
import { TfiFiles } from "react-icons/tfi";
import { BiGroup } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: AiOutlineHome },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: TfiFiles,
  },
  { name: "Customers", href: "/dashboard/customers", icon: BiGroup },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary hover:text-white md:flex-none md:justify-start md:p-2 md:px-3`,
              {
                "bg-primary text-white": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" size={20} />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
