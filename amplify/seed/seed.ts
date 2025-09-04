import type { Schema } from "../data/resource";
import { readFile } from "node:fs/promises";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";

// this is used to get the amplify_outputs.json file as the file will not exist until sandbox is created
const url = new URL("../../amplify_outputs.json", import.meta.url);
const outputs = JSON.parse(await readFile(url, { encoding: "utf8" }));

Amplify.configure(outputs);

const dataClient = generateClient<Schema>();

try {
  const request = await fetch(
    "https://fablereadscms.d0t355xg79y7t.us-east-1.cs.amazonlightsail.com/api/fables",
  );
  const response = await request.json();
  const fables = (response.docs || []) as any[];
  await Promise.all(
    fables.map((fable) =>
      dataClient.models.Fable.create(
        {
          title: fable.title,
          author: fable.author.name,
          excerpt: fable.excerpt,
          origin: fable.origin.name,
          slug: fable.slug,
          locale: "en",
          id: fable.id,
          topics: fable.topics.map((topic: any) => topic.name),
          audio: false,
          images: {
            pixar: fable.heroImage.sizes.square.url,
            vintage: fable.vintageImage.sizes.square.url,
          },
        },
        {
          authMode: "apiKey",
        },
      ),
    ),
  );
} catch (err) {
  console.log(err);
}
