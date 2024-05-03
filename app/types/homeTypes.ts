import { Image } from "sanity";

export interface IHero {
  image: Image;
  _type: string;
  caption: string;
  whatsappNumber: string;
}

export interface IVideo {
  title: string;
  _type: string;
  video: string;
}

export interface IService {
  heading: string;
  description: string;
  _key: string;
  icon: Image;
}

export interface IServices {
  _type: string;
  service: IService[];
}

export interface IPickedGallery {
  image: Image;
  alt?: string;
  description?: string;
  _key: string;
}

export interface ITestimony {
  name: string;
  address: string;
  comment: string;
}
