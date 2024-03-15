import Hero from "./components/home/hero";
import Why from "./components/home/whyCheshhtasya";
import Video from "./components/home/video";
import Services from "./components/home/services";
import Gallery from "./components/home/gallery";
import ProjectJourney from "./components/home/project-journey";
import Testimony from "./components/home/testimony";
import Quote from "./components/common/quote";

const Home = () => {
  return (
    <>
      <Hero />
      <Why />
      <Video />
      <Services />
      <Gallery />
      <ProjectJourney />
      <Testimony />
      <Quote />
    </>
  );
};

export default Home;
