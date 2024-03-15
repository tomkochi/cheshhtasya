"use client";

import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  title: string;
  route: string;
}

const Header = () => {
  const links: LinkItem[] = [
    { title: "About", route: "/about-us" },
    { title: "Services", route: "/services" },
    { title: "Clients", route: "/clients" },
    { title: "Gallery", route: "/gallery" },
    { title: "Contact us", route: "/contact" },
  ];

  return (
    <header className="h-20 bg-white flex items-center shadow-md px-3">
      <div className="flex mx-auto items-center w-full max-w-7xl justify-between">
        <Image
          src="/cheshhtasya-logo-name.svg"
          width={194}
          height={48}
          alt="cheshhtasya logo"
        />
        <div className="flex gap-8 items-center">
          {links.map((link: LinkItem) => (
            <Link
              href={link.route}
              key={link.title}
              className="text-primary text-[16px]"
            >
              {link.title}
            </Link>
          ))}
          <button
            className="
                text-sm px-3 py-[6px] font-semibold text-white rounded-full bg-action
                hover:bg-action-hover duration-100"
          >
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
