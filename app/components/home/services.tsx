"use client";

import { IServices, IService } from "@/app/types/homeTypes";
import { urlForImage } from "@/sanity/lib/image";
import { FC, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface ServicesProps {
  data: IServices;
}

const Services: FC<ServicesProps> = ({ data: { service } }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-3 my-14">
      <h2
        className="text-3xl text-primary text-center font-semibold mb-14"
        data-aos="fade-up"
      >
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 gap-11">
        {service.map((d, index: number) => {
          return (
            <Item
              key={d._key}
              _key={d._key}
              icon={d.icon}
              heading={d.heading}
              description={d.description}
            />
          );
        })}
      </div>
    </div>
  );
};

const Item: FC<IService> = ({ icon, heading, description }) => {
  return (
    <div className="flex gap-5" data-aos="fade-up">
      <div>
        <div className="w-[80px]">
          <img src={urlForImage(icon)} alt="" />
        </div>
      </div>
      <div className="max-w-[252px] flex-grow-1">
        <h4 className="text-xl text-primary font-bold mb-3">{heading}</h4>
        <h5 className="text-sm text-secondary">{description}</h5>
      </div>
    </div>
  );
};

export default Services;
