"use client";

import Link from "next/link";

const Gallery = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 my-14">
      <div className="grid grid-cols-8 grid-rows-5 gap-4 h-[800px]">
        <div className="col-span-2 group gallery-image-container">
          <img className="gallery-image" src="/home-hero.avif" alt="" />
        </div>
        <div className="col-span-3 row-span-3 group gallery-image-container">
          <img className="gallery-image" src="/home-hero.avif" alt="" />
        </div>
        <div className="col-span-3 row-span-2 group gallery-image-container">
          <img className="gallery-image" src="/home-hero.avif" alt="" />
        </div>
        <div className="col-span-2 row-span-2 group gallery-image-container">
          <img className="gallery-image" src="/home-hero.avif" alt="" />
        </div>
        <div className="col-span-2 row-span-3 group gallery-image-container">
          <img className="gallery-image" src="/home-hero.avif" alt="" />
        </div>
        <div className="group gallery-image-container">
          <img className="gallery-image" src="/home-hero.avif" alt="" />
        </div>
        <div className="col-span-5 row-span-2 group gallery-image-container">
          <img className="gallery-image" src="/home-hero.avif" alt="" />
        </div>
        <div className="row-span-2 group gallery-image-container">
          <img className="gallery-image" src="/home-hero.avif" alt="" />
        </div>
      </div>
      <Link href="\" className="mt-2 flex justify-end text-secondary group">
        See more{" "}
        <img
          src="/arrow-brack-right.svg"
          alt=""
          className="ml-2 group-hover:ml-4 duration-150"
        />
      </Link>
    </div>
  );
};

export default Gallery;
