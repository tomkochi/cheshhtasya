import {
  IHero,
  IVideo,
  IPickedGallery,
  IService,
  IServices,
  ITestimony,
} from "@/app/types/homeTypes";
import { client } from "../lib/client";

type HomeData = (
  | IHero
  | IVideo
  | IService
  | IServices
  | IPickedGallery
  | ITestimony
)[];

export async function getHome(): Promise<HomeData> {
  const home: HomeData = await client.fetch(
    `*[
      _type == "hero" ||
      _type == "services" ||
      _type == "pickedGallery" ||
      _type == "testimonies" ||
      _type == "video"
    ]`
  );

  return home;
}
