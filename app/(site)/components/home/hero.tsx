"use client";

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { FC } from "react";
import { IHero } from "@/app/types/homeTypes";

interface HeroProps {
  data: IHero;
}

const Hero: FC<HeroProps> = ({ data: { caption, image } }) => {
  return (
    <>
      <div
        className={`relative w-full bg-cover bg-center h-[70vh] md:h-[80vh]`}
        style={{ backgroundImage: `url("${urlForImage(image)}")` }}
      >
        <div className="w-full h-[436px] bg-gradient-to-b from-black opacity-70 via-black to-transparent"></div>
        <div className="absolute top-[40%] md:top-32 left-0 right-0 flex justify-center items-center">
          <h1 className="text-center text-4xl md:text-6xl font-thin text-white px-6 py-3 text-shadow-2xl">
            {caption}
          </h1>
        </div>
        <a
          href="https://wa.me/+919037004066"
          target="_blank"
          className="absolute right-4 bottom-3 w-[40px] md:w-[52px] hover:grayscale-[0.5] duration-150 hover: shadow-xl"
        >
          <Image
            src="/whatsapp-icon.svg"
            width={52}
            height={52}
            layout="responsive"
            alt="whatsApp icon"
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
