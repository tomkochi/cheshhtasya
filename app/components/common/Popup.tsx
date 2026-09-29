"use client";
import { urlForImage } from "@/sanity/lib/image";
import React, { FC, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Image } from "sanity";
import ImageComponent from "next/image";

interface IImageProps {
  image: Image;
  alt?: string;
  description?: string;
  _key: string;
}

interface PopupProps {
  imageIndex: number | null;
  setImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
  images: IImageProps[];
}

export const Popup: FC<PopupProps> = ({
  imageIndex,
  setImageIndex,
  images,
}) => {
  const slide = (dir: string) => {
    if (dir === "Left") {
      nextSlide();
    }
    if (dir === "Right") {
      previousSlide();
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide("Left"),
    onSwipedRight: () => slide("Right"),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const nextSlide = () => {
    if (imageIndex !== null && imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };
  const previousSlide = () => {
    if (imageIndex !== null && imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setImageIndex]);

  return (
    <div
      {...handlers}
      className="fixed left-0 top-0 w-full h-full bg-black p-12 z-50"
    >
      <button
        className="absolute flex gap-3 top-4 right-4 cursor-pointer p-2 group z-50"
        onClick={() => setImageIndex(null)}
      >
        <span className="text-white opacity-0 group-hover:opacity-100 duration-200">
          Close
        </span>
        <img src="/close-white.svg" width={18} alt="" />
      </button>
      <div className="w-full h-full overflow-hidden">
        {imageIndex !== null && (
          <ImageComponent
            src={urlForImage(images[imageIndex].image)}
            className="gallery-image w-full h-full object-contain"
            layout="fill"
            alt=""
          />
        )}
      </div>

      {imageIndex !== null && (
        <div className="bg-black bg-opacity-50 w-full fixed left-0 bottom-3">
          <div className="text-center w-full max-w-6xl p-3 text-white mx-auto duration-500">
            {images[imageIndex].description}
            {images[imageIndex].alt}
          </div>
        </div>
      )}
      {imageIndex !== null && imageIndex < images.length - 1 && (
        <div className="w-[50px] lg:w-[100px] h-full fixed top-0 right-0 flex justify-center items-center bg-opacity-0 group">
          <button
            className="py-40 opacity-60 hover:opacity-100 duration-150"
            onClick={nextSlide}
          >
            <img src="/arrow-next.svg" width={20} alt="" />
          </button>
        </div>
      )}
      {imageIndex !== null && imageIndex > 0 && (
        <div className="w-[50px] lg:w-[100px] h-full fixed top-0 left-0 flex justify-center items-center bg-opacity-0 group">
          <button
            className="py-40 opacity-60 hover:opacity-100 duration-150"
            onClick={previousSlide}
          >
            <img
              src="/arrow-previous.svg"
              width={20}
              alt=""
              className="duration-1000"
            />
          </button>
        </div>
      )}
    </div>
  );
};
