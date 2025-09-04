import { LOCALE } from "@/constants";
import { client } from "@/utils/amplify";
import { getFable } from "@/utils/api";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string; locale: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const { data: fables } = await client.models.Fable.list({
    authMode: "apiKey",
    filter: {
      locale: {
        eq: LOCALE.DE,
      },
    },
  });
  return fables.map((fable) => ({ slug: fable.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function FablePage({ params }: Props) {
  const { slug, locale } = await params;
  const fable = await getFable(slug, locale);

  return (
    <main className="mt-[300px]">
      {JSON.stringify(fable.content)}
      <section className="mx-auto container">
        <div>
          {/* content header */}
          <h2>
            {fable.author.name} | {fable.origin.name}
          </h2>
          <div>
            <h1>Title</h1>
            <p>Excerpt</p>
          </div>
          <div>Tag topics {slug}</div>
        </div>
        <div>{/* Banner Image */}</div>
        <div>{/* Content */}</div>
        <div>{/* Feedback and Share */}</div>
        <div>{/* Relevance Content, use h3 in title of accordion */}</div>
      </section>
      <section>{/* related fables */}</section>
      <section>{/* Call to action */}</section>
    </main>
  );
}
