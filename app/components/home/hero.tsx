"use client";

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { FC, useEffect } from "react";
import { IHero } from "@/app/types/homeTypes";
import Aos from "aos";
import "aos/dist/aos.css";

interface HeroProps {
  data: IHero;
}

const Hero: FC<HeroProps> = ({ data: { caption, image, whatsappNumber } }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className={`relative w-full bg-cover bg-center h-[70vh] md:h-[80vh]`}
        style={{ backgroundImage: `url("${urlForImage(image)}")` }}
      >
        <div className="w-full h-[436px] bg-gradient-to-b from-black opacity-70 via-black to-transparent"></div>
        <div className="absolute top-[40%] md:top-32 left-0 right-0 flex justify-center items-center">
          <h1
            className="text-center text-4xl md:text-6xl font-thin text-white px-6 py-3 text-shadow-2xl"
            data-aos="zoom-out-up"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            {caption}
          </h1>
        </div>
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`}
          target="_blank"
          className="absolute right-4 bottom-3 hover:grayscale-[0.5] duration-50 hover:shadow-xl"
        >
          <Image
            src="/whatsapp-icon.svg"
            width={52}
            height={52}
            alt="whatsApp icon"
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
