import Hero from "../components/home/hero";
import Why from "../components/home/whyCheshhtasya";
import Video from "../components/home/video";
import Services from "../components/home/services";
import Gallery from "../components/home/gallery";
import ProjectJourney from "../components/home/project-journey";
import Testimony from "../components/home/testimony";
import Link from "next/link";

import { getHome } from "@/sanity/utils/fetchHome";
import { getOther } from "@/sanity/utils/fetchOther";

export default async function Home() {
  const data = await getHome();
  const otherData = await getOther();

  const heroData = (data as any[]).filter((d) => d._type === "hero")[0];
  const serviceData = (data as any[]).filter((d) => d._type === "services")[0];
  const galleryData = (data as any[]).filter(
    (d) => d._type === "pickedGallery"
  )[0];
  const testimonies = (data as any[]).filter(
    (d) => d._type === "testimonies"
  )[0].testimony;
  const video = (data as any[]).filter((d) => d._type === "video")[0];

  return (
    <>
      <Hero
        data={{ ...heroData, whatsappNumber: otherData[0].whatsAppNumber }}
      />
      <Why />
      <div className="hidden md:block">
        <Gallery data={galleryData} />
      </div>
      <Video id={video?.video} />
      <Services data={serviceData} />
      <div className="md:hidden flex justify-center my-10">
        <Link
          href="/gallery"
          className="bg-action text-white px-10 py-2 rounded-full"
        >
          View Gallery
        </Link>
      </div>
      <ProjectJourney />
      <Testimony data={testimonies} />
    </>
  );
}
