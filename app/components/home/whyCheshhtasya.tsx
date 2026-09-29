"use client";

import { FC, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface Data {
  icon: string;
  label: string;
}

const Why: FC = () => {
  const data: Data[] = [
    {
      icon: "calendar-clock.svg",
      label: "Decades of Design Mastery",
    },
    {
      icon: "group-star.svg",
      label: "Over 1000+ happy customers",
    },
    {
      icon: "clipboard.svg",
      label: "A-Z Interior and Exterior Excellence",
    },
    {
      icon: "handshake.svg",
      label: "Client-Centric Approach",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-3 my-14">
      <h3
        className="text-3xl text-primary text-center font-semibold mb-14"
        data-aos="fade-up"
      >
        Why Cheshhtasya?
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-center">
        {data.map((d: Data, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-40"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-1 mb-3">
              <img src={`/${d.icon}`} alt="" className="h-10 md:h-14" />
            </div>
            <h5 className="text-secondary text-sm md:text-md text-center leading-tight">
              {d.label}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
