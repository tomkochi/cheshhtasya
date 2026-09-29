import React, { FC } from "react";
import { getGallery } from "@/sanity/utils/fetchGallery";
import GalleryComponent from "../../components/gallery/gallery";

const Gallery: FC = async () => {
  const data = await getGallery();
  const images = data[0].images;
  return (
    <>
      <div className="w-full max-w-7xl mx-auto my-12">
        <h1 className="text-2xl font-bold text-primary mb-6 px-4">Gallery</h1>
        {images.length > 0 && <GalleryComponent images={images} />}
      </div>
    </>
  );
};

export default Gallery;
