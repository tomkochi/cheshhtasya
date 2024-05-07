"use client";

import Image from "next/image";
import Link from "next/link";
import Quote from "./quote";
import { useState } from "react";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Aos from "aos";
import "aos/dist/aos.css";

interface LinkItem {
  title: string;
  route: string;
}

const Header: FC = () => {
  const [showQuote, setShowQuote] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState(false);

  const quoteToggle = (show: boolean): void => {
    setShowQuote(show);
    // document.body.style.overflow = show ? "hidden" : "auto";
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      {!showQuote && (
        <button
          className="
                fixed md:hidden lefft-0 bottom-0 w-full rounded-tl-2xl rounded-tr-2xl
                text-sm px-3 py-[8px] font-semibold text-white bg-action
                hover:bg-action-hover duration-100"
          onClick={() => {
            quoteToggle(true);
            setShowMenu(false);
          }}
        >
          FREE CONSULTATION
        </button>
      )}
      <header className="shadow-2xl">
        <div className="flex items-center px-3 py-3">
          <div className="flex mx-auto items-center w-full max-w-7xl justify-between">
            <Link href="/">
              <img
                src="/cheshhtasya-logo-name.svg"
                className="w-[120px] md:w-[194px]"
                alt="cheshhtasya logo"
              />
            </Link>
            <button
              className="flex justify-center items-center md:hidden w-[32px]"
              onClick={() => setShowMenu((s) => !s)}
            >
              <img src={showMenu ? "/menu-close.svg" : "/menu.svg"} alt="" />
            </button>
            <div className="hidden md:block">
              <Menu quoteToggle={quoteToggle} setShowMenu={setShowMenu} />
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden py-6">
            <Menu quoteToggle={quoteToggle} setShowMenu={setShowMenu} />
          </div>
        )}
      </header>
      {showQuote && <Quote showQuote={quoteToggle} />}
    </div>
  );
};

interface MenuProps {
  quoteToggle: (show: boolean) => void;
  setShowMenu: (show: boolean) => void;
}

const Menu: FC<MenuProps> = ({ quoteToggle, setShowMenu }) => {
  const links: LinkItem[] = [
    { title: "About", route: "/about-us" },
    { title: "Services", route: "/services" },
    { title: "Gallery", route: "/gallery" },
    { title: "Contact us", route: "/contact-us" },
  ];

  const activeStyle =
    "relative after:block after:absolute after:lef-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-action after:opacity-60";

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      {links.map((link: LinkItem) => (
        <Link
          href={link.route}
          key={link.title}
          className={`text-primary text-[16px] ${
            usePathname() === link.route ? activeStyle : ""
          }`}
          onClick={() => setShowMenu(false)}
        >
          {link.title}
        </Link>
      ))}
      <button
        className="hidden md:block                text-sm px-3 py-[6px] font-semibold text-white rounded-full bg-action
                hover:bg-action-hover duration-100"
        onClick={() => {
          quoteToggle(true);
          setShowMenu(false);
        }}
      >
        FREEE CONSULTATION
      </button>
    </div>
  );
};

export default Header;
