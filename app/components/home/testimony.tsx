"use client";

import { FC, useEffect } from "react";
import { ITestimony } from "@/app/types/homeTypes";
import Aos from "aos";
import "aos/dist/aos.css";

interface TestimonyProps {
  data: ITestimony[];
}

const Testimony: FC<TestimonyProps> = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-3 my-14">
      <h2 className="text-3xl text-primary text-center font-semibold mb-14">
        What our clients say
      </h2>
      <div className="grid md:grid-cols-3 gap-16">
        {data.map((d: ITestimony, index: number) => {
          return (
            <div data-aos="fade-up" data-aos-delay={index * 100}>
              <Says
                key={index}
                name={d.name}
                address={d.address}
                comment={d.comment}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Says: FC<ITestimony> = ({ name, address, comment }) => {
  return (
    <div
      className="
        relative py-3 after:w-[2px]
        after:h-full first-of-type:after:w-0 after:bg-bg-gray after:absolute after:-left-8 after:-top-2 "
    >
      <div className="flex justify-end">
        <img src="/stars.svg" alt="" />
      </div>
      <h3 className="font-bold text-lg text-primary">{name}</h3>
      <div className="h-[2px] w-10 bg-[#FBBE00]"></div>
      <h4 className="text-xs text-secondary italic mb-3">{address}</h4>
      <p className="text-secondary">{comment}</p>
    </div>
  );
};

export default Testimony;
