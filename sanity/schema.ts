import { type SchemaTypeDefinition } from "sanity";

import {
  hero,
  video,
  services,
  pickedGallery,
  testimony,
} from "./schemas/homeSchema";
import { about } from "./schemas/aboutSchema";
import { servicesPage } from "./schemas/servicesSchema";
import { galleryPage } from "./schemas/gallerySchema";
import { other } from "./schemas/otherSchema";

const schemas = [
  hero,
  video,
  services,
  pickedGallery,
  testimony,
  about,
  servicesPage,
  galleryPage,
  other,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemas,
};
