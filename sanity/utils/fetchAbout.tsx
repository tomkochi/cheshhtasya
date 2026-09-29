import { client } from "../lib/client";

type AboutData = any[];

export async function getAbout(): Promise<AboutData> {
  const about: AboutData = await client.fetch(`*[_type == "about"]`);

  return about;
}
