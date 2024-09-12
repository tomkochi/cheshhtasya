import { Rule } from "sanity";

export const other = {
  name: "other",
  title: "Common details",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "enquiryEmail",
      type: "string",
    },
    {
      name: "facebookLink",
      type: "string",
    },
    {
      name: "youtubeChannel",
      type: "string",
    },
    {
      name: "whatsAppNumber",
      titke: "WhatsApp number",
      type: "string",
      description: "Include country code (eg: +91)",
    },
    {
      name: "address",
      type: "object",
      fields: [
        { name: "addressLine1", type: "string" },
        { name: "addressLine2", type: "string" },
        { name: "addressLine3", type: "string" },
        {
          name: "contactPhone",
          type: "string",
          description: "Include country code (eg: +91)",
        },
        {
          name: "secondaryPhone",
          type: "string",
          description: "Include country code (eg: +91)",
        },
        {
          name: "email",
          type: "string",
        },
      ],
    },
    {
      name: "location",
      type: "string",
      description: "Copy and paste the full url from google maps",
    },
  ],
};
