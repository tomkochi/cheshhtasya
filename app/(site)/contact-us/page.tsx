import { getOther } from "@/sanity/utils/fetchOther";
import type { Metadata } from "next";
import { FC } from "react";
import Contact from "./contact-us";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cheshhtasya for free consultation, interior design inquiries, project estimations, and custom branding requests.",
};

const ContactUs: FC = async () => {
  const data = await getOther();

  return <Contact data={data} />;
};

export default ContactUs;
