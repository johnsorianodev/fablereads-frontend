import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { LOCALE } from "../../../../../../constants";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const fables = await fetch(
    `${process.env.NEXT_PUBLIC_HEADLESS_URL}/api/fables?limit=5`,
  );
  const response = await fables.json();
  console.log("Response: ", JSON.stringify(response));
  const items = (response.docs || []).map((fable: { slug: string }) => ({
    slug: fable.slug,
  }));
  console.log("Server: ", JSON.stringify(items));
  return items;
}

export default async function FablePage({ params }: Props) {
  const values = await params;
  // setRequestLocale(LOCALE.EN);
  // const t = useTranslations("FablePage");

  console.log("Frontend: ", JSON.stringify(values));

  return (
    <main>
      <section>
        <div>
          {/* content header */}
          <h2>Author</h2>
          <div>
            <h1>Title</h1>
            <p>Excerpt</p>
          </div>
          <div>Tag topics {values.slug}</div>
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
