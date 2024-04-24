import { Rule } from "sanity";

export const galleryPage = {
  name: "galleryPage",
  title: "Gallery Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Page Heading",
      type: "string",
      description: "The heading/title of the gallery page",
    },
    {
      name: "images",
      title: "Images",
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
              name: "description",
              title: "Description",
              type: "text",
              description: "Description of the image",
            },
          ],
        },
      ],
      description: "Images for the gallery along with their descriptions",
      validation: (Rule: Rule) => Rule.required().min(1),
    },
  ],
};
