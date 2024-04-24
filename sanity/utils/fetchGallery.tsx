import { client } from "../lib/client";

type GalleryData = any[];

export async function getGallery(): Promise<GalleryData> {
  const gallery: GalleryData = await client.fetch(`*[_type == "galleryPage"]`);

  return gallery;
}
