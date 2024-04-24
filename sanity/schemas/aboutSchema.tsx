import { Rule } from "sanity";

export const about = {
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "headerImage",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alyernate text",
          options: { isHighlighted: true },
        },
      ],
    },
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
          lists: [],
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: { isHighlighted: true },
            },
          ],
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
