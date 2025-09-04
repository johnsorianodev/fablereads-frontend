import type { Metadata } from "next";
import { setRequestLocale, getMessages } from "next-intl/server";
import { Sora, Bitter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";
import "../../globals.css";
import Header from "../../../components/header";
import Footer from "../../../components/Footer";
import Providers from "../../providers";

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

const bitterSans = Bitter({
  variable: "--font-bitter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FableReads",
  description: "Ad Free: Fable",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${soraSans.variable} ${bitterSans.variable} antialiased`}
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
