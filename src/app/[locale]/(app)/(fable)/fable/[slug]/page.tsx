import { client } from "@/utils/amplify";
import { getFable } from "@/utils/api";
import { Metadata } from "next";
import Button from "@/components/ui/button";
import {
  PayloadLexicalReactRenderer,
  defaultElementRenderers,
} from "@atelier-disko/payload-lexical-react-renderer";

export const dynamicParams = true;

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  const { data: fables } = await client.models.Fable.list({
    authMode: "apiKey",
    filter: {
      locale: {
        eq: locale,
      },
    },
  });
  return fables.map((fable) => ({ slug: fable.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const fable = await getFable(slug, locale);

  if (!fable) {
    return {
      title: "Fable Not Found",
    };
  }

  return {
    title: fable.title,
    description: fable.excerpt,
    openGraph: {
      title: fable.title,
      description: fable.excerpt,
      images: [fable.heroImage.sizes.og.url],
    },
  };
}

export default async function FablePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const fable = await getFable(slug, locale);

  return (
    <main className="pt-[150px]">
      <section className="mx-auto md:max-w-3xl px-4">
        <div>
          <div className="space-y-1">
            <div>
              <h2 className="text-primary font-semibold">
                {fable.author.name} | {fable.origin.name}
              </h2>
              <h1 className="text-3xl font-bold">{fable.title}</h1>
            </div>
            <p className="italic text-[18px] font-serif">{fable.excerpt}</p>
            <div className="space-x-3 py-4">
              {fable.topics.map((topic) => (
                <Button
                  key={topic.id}
                  className="bg-gray-500 text-xs font-bold px-2 py-1.5 rounded-md"
                >
                  {topic.name}
                </Button>
              ))}
            </div>
          </div>
          <div
            style={
              {
                "--image-url": `url(${fable.vintageImage.sizes.square.url})`,
              } as React.CSSProperties
            }
            className="bg-[image:var(--image-url)] bg-cover bg-center aspect-square rounded-md cursor-pointer object-cover"
          />
        </div>
        <PayloadLexicalReactRenderer
          content={fable.content}
          elementRenderers={{
            ...defaultElementRenderers,
            paragraph: (props) => (
              <p className="prose prose-xl font-medium text-white font-serif py-4">
                {props.children}
              </p>
            ),
          }}
        />
        <div>{/* Feedback and Share */}</div>
        <div>{/* Relevance Content, use h3 in title of accordion */}</div>
      </section>
      <section>{/* related fables */}</section>
      <section>{/* Call to action */}</section>
    </main>
  );
}
