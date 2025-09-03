import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ImageTile from "../../../components/ImageTile/ImageTile";
import Hero from "../../../components/hero";
import FableCarousel, { FableItem } from "../../../components/FableCarousel";
import { fables as popularFables } from "../../../components/FableCarousel/data";
import CallToAction from "../../../components/CallToAction";
import FableQuotes from "../../../components/FableQuotes";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main>
      <Hero />
      <div className="-mt-10">
        <FableCarousel title="Popular Fables" items={popularFables} />
      </div>
      <FableCarousel
        title="New on FableReads"
        items={popularFables.reverse()}
      />
      <FableQuotes />
      <CallToAction />
    </main>
  );
}
