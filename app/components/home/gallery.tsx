"use client";

import { IPickedGallery } from "@/app/types/homeTypes";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Popup } from "../common/Popup";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

interface GalleryProps {
  data: {
    pickedGallery: IPickedGallery[];
  };
}

const Gallery: FC<GalleryProps> = ({ data: { pickedGallery } }) => {
  const imgSrc = (i: number) =>
    urlForImage(pickedGallery[i]?.image?.asset?._ref || "");

  const [imageIndex, setImageIndex] = useState<number | null>(null);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 my-14">
      <div className="grid grid-cols-8 grid-rows-5 gap-4 h-[800px]">
        <div
          onClick={() => setImageIndex(0)}
          className="col-span-2 group gallery-image-container"
        >
          <Image
            className="gallery-image"
            src={imgSrc(0)}
            width={600}
            height={300}
            alt={pickedGallery[0].alt || ""}
            data-aos="fade-up"
          />
        </div>
        <div
          onClick={() => setImageIndex(1)}
          className="col-span-3 row-span-3 group gallery-image-container"
        >
          <Image
            className="gallery-image"
            src={imgSrc(1)}
            width={600}
            height={300}
            alt={pickedGallery[1].alt || ""}
            data-aos="fade-up"
          />
        </div>
        <div
          onClick={() => setImageIndex(2)}
          className="col-span-3 row-span-2 group gallery-image-container"
        >
          <Image
            className="gallery-image"
            src={imgSrc(2)}
            width={600}
            height={300}
            alt={pickedGallery[2].alt || ""}
            data-aos="fade-up"
          />
        </div>
        <div
          onClick={() => setImageIndex(3)}
          className="col-span-2 row-span-2 group gallery-image-container"
        >
          <Image
            className="gallery-image"
            src={imgSrc(3)}
            width={600}
            height={300}
            alt={pickedGallery[3].alt || ""}
            data-aos="fade-up"
          />
        </div>
        <div
          onClick={() => setImageIndex(4)}
          className="col-span-2 row-span-3 group gallery-image-container"
        >
          <Image
            className="gallery-image"
            src={imgSrc(4)}
            width={600}
            height={300}
            alt={pickedGallery[4].alt || ""}
            data-aos="fade-up"
          />
        </div>
        <div
          onClick={() => setImageIndex(5)}
          className="group gallery-image-container"
        >
          <Image
            className="gallery-image"
            src={imgSrc(5)}
            width={600}
            height={300}
            alt={pickedGallery[5].alt || ""}
            data-aos="fade-up"
          />
        </div>
        <div
          onClick={() => setImageIndex(6)}
          className="col-span-5 row-span-2 group gallery-image-container"
        >
          <Image
            className="gallery-image"
            src={imgSrc(6)}
            width={600}
            height={300}
            alt={pickedGallery[6].alt || ""}
            data-aos="fade-up"
          />
        </div>
        <div
          onClick={() => setImageIndex(7)}
          className="row-span-2 group gallery-image-container"
        >
          <Image
            className="gallery-image"
            src={imgSrc(7)}
            width={600}
            height={300}
            alt={pickedGallery[7].alt || ""}
            data-aos="fade-up"
          />
        </div>
      </div>
      <Link
        href="/gallery"
        className="mt-2 flex justify-end text-secondary group"
        data-aos="fade-up"
      >
        See more{" "}
        <img
          src="/arrow-brack-right.svg"
          alt=""
          className="ml-2 group-hover:ml-4 duration-150"
          data-aos="fade-up"
        />
      </Link>
      {imageIndex !== null && (
        <Popup
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          images={pickedGallery}
        />
      )}
    </div>
  );
};

export default Gallery;
