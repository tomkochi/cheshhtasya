"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="relative w-full bg-red-700 bg-[url('/home-hero.avif')] bg-cover bg-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="w-full h-[436px] bg-gradient-to-b from-black opacity-70 via-black to-transparent"></div>
      <div className="relative flex justify-center items-center mt-[-220px]">
        <h1 className="text-6xl font-thin text-white px-6 py-3 text-shadow-2xl">
          Redesigning Spaces, Elevating Lives
        </h1>
      </div>
      <a
        href="/"
        className="absolute right-4 bottom-3 hover:grayscale-[0.5] duration-150 hover: shadow-xl"
      >
        <Image
          src="/whatsapp-icon.svg"
          width={52}
          height={52}
          alt="whatsApp icon"
        />
      </a>
    </div>
  );
};

export default Hero;
