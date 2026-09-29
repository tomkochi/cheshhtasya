import { Rule } from "sanity";

export const hero = {
  name: "hero",
  title: "Main page - Main image and caption",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Enter the text that you want to show over the image",
    },
    {
      name: "image",
      title: "Main image",
      type: "image",
      description: "The main image to show on the home page",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternate text",
          type: "string",
        },
      ],
    },
  ],
  validation: (Rule: Rule) => Rule.required(),
};

export const video = {
  name: "video",
  title: "Main page - video",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "video",
      title: "Youtube video ID",
      type: "string",
    },
  ],
  validation: (Rule: Rule) => Rule.required(),
};

export const services = {
  name: "services",
  title: "Main page - Services",
  type: "document",
  fields: [
    {
      name: "service",
      title: "Service",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              description: "Select an icon for the service",
              options: {
                hotspot: true, // Enables hotspot editing for the image
              },
            },
            {
              name: "heading",
              title: "Heading",
              type: "string",
              description: "Enter the heading for the service",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              description: "Enter a one-line description for the service",
              rows: 2, // Number of rows for the text area
            },
          ],
        },
      ],
    },
  ],
  validation: (Rule: Rule) => Rule.required(),
};

export const pickedGallery = {
  name: "pickedGallery",
  title: "Main page - Picked gallery images",
  type: "document",
  fields: [
    {
      name: "pickedGallery",
      title: "Gallery pictures",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "alt",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule: Rule) =>
        Rule.required()
          .length(8)
          .error("Exactly 8 images required for the gallery"),
      description: "Pick exactly 8 images for the gallery section",
    },
  ],
};

export const testimony = {
  name: "testimonies",
  title: "Main page - What our clients say",
  type: "document",
  fields: [
    {
      name: "testimony",
      title: "Testimony",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "address",
              title: "Address",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "comment",
              title: "Comment",
              type: "text",
              rows: 3,
              validation: (Rule: Rule) => Rule.required().max(500),
            },
          ],
        },
      ],
    },
  ],
};
