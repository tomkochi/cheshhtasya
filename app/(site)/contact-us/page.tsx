import { getOther } from "@/sanity/utils/fetchOther";
import { FC } from "react";
import Contact from "./contact-us";

const ContactUs: FC = async () => {
  const data = await getOther();

  return <Contact data={data} />;
};

export default ContactUs;
