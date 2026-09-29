"use client";

import { FC, useEffect, useState } from "react";
import { Popup } from "../common/Popup";
import { urlForImage } from "@/sanity/lib/image";
import { Image } from "sanity";
import ImageComponent from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

interface IImage {
  image: Image;
  alt?: string;
  description?: string;
  _key: string;
}

interface GalleryProps {
  images: IImage[];
}

const GalleryComponent: FC<GalleryProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-3 px-4">
        {images.map((d, index) => {
          return (
            <button
              key={index}
              className="h-[210px] md:h-[260px] group relative gallery-image-container
                         outline outline-1 outline-gray-300"
              onClick={() => setImageIndex(index)}
              data-aos="fade-up"
            >
              <ImageComponent
                src={urlForImage(d.image)}
                className="gallery-image"
                width={600}
                height={300}
                alt=""
              />
            </button>
          );
        })}
      </div>
      {imageIndex !== null && (
        <Popup
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          images={images}
        />
      )}
    </>
  );
};

export default GalleryComponent;
