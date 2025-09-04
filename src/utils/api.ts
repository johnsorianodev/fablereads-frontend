import { z } from "zod";

// Schema for different image sizes (thumbnail, square, etc.)
const SizeDetailSchema = z.object({
  url: z.string(),
  width: z.number().nullable(),
  height: z.number().nullable(),
  mimeType: z.string().nullable(),
  filesize: z.number().nullable(),
  filename: z.string().nullable(),
});

// Schema for the main image/media object structure
const MediaSchema = z.object({
  id: z.uuid(),
  alt: z.string().nullable(),
  caption: z.string().nullable(),
  url: z.url(),
  thumbnailURL: z.string().nullable(),
  filename: z.string(),
  mimeType: z.string(),
  filesize: z.number(),
  width: z.number().nullable(),
  height: z.number().nullable(),
  focalX: z.number().nullable(),
  focalY: z.number().nullable(),
  sizes: z.object({
    thumbnail: SizeDetailSchema,
    square: SizeDetailSchema,
    small: SizeDetailSchema,
    medium: SizeDetailSchema,
    large: SizeDetailSchema,
    xlarge: SizeDetailSchema,
    og: SizeDetailSchema,
  }),
});

// Schema for related items like author, origin, collection, and topics
const RelatedItemSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  slug: z.string(),
});

// Main schema for a single fable object
const FableSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  excerpt: z.string(),
  useLevelContent: z.boolean(),
  hasBook: z.boolean(),
  hasVintageEdition: z.boolean(),
  isFableOfTheMonth: z.boolean(),
  heroImage: MediaSchema,
  vintageImage: MediaSchema,
  author: RelatedItemSchema,
  origin: RelatedItemSchema,
  collection: RelatedItemSchema,
  topics: z.array(RelatedItemSchema),
  content: z.any(),
  audio: MediaSchema.nullable().optional(),
  funVersion: z.any(),
  rhymeVersion: z.any(),
  relevanceContent: z.any(),
  contentLevelBasic: z.any(),
  relevanceLevelBasic: z.any(),
  audioLevelBasic: z.null().optional(),
  contentLevelIntermediate: z.any(),
  relevanceLevelIntermediate: z.any(),
  audioLevelIntermediate: z.null().optional(),
  contentLevelAdvanced: z.any(),
  relevanceLevelAdvanced: z.any(),
  audioLevelAdvanced: z.null().optional(),
  relatedFables: z.array(z.unknown()), // Assuming empty or unknown structure
  categories: z.array(z.unknown()), // Assuming empty or unknown structure
  meta: z
    .object({
      title: z.string().nullable().optional(),
      image: z.unknown().nullable().optional(), // Could be a specific schema if known
      description: z.string().nullable().optional(),
    })
    .optional(),
  slug: z.string(),
  _status: z.enum(["draft", "published"]),
});

// The final schema for the entire API response (an array of fables)
export const FableResponseSchema = z.object({
  docs: z.array(FableSchema),
});

export type Fable = z.infer<typeof FableSchema>;

export async function getFable(slug: string, locale: string): Promise<Fable> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HEADLESS_URL}/api/fables?where[slug][equals]=${slug}&locale=${locale}`,
    {
      next: { revalidate: 60 }, // Re-generate the page every 60 seconds
    },
  );

  const fable = await res.json();
  const validatedData = FableResponseSchema.parse(fable);
  return validatedData.docs[0];
}

export async function getFables(
  locale: string,
  limit?: number,
): Promise<Fable[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HEADLESS_URL}/api/fables?locale=${locale}&limit=${limit ?? 5}`,
  );

  const fable = await res.json();
  const validatedData = FableResponseSchema.parse(fable);
  return validatedData.docs;
}
