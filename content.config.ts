import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSeoCollection({
        source: "**/*.md",
        type: "page",
        schema: z.object({
          design: z.object({
            primaryColor: z.string().default("#2E322D"),
            secondaryColor: z.string().default("#B9B59F"),
            backgroundColor: z.string().default("#E5E9E9"),
          }),
          navigation: z
            .union([
              z.boolean(),
              z.object({
                title: z.string(),
                description: z.string(),
                icon: z.string(),
                displayInTopNav: z.boolean(),
                topNavOrder: z.number(),
              }),
            ])
            .default(true),
        }),
      }),
    ),
  },
});
