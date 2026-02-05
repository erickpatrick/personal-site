import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";

export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => ({ locale: locale }));
}

type MetadataProps = {
  params: Promise<{ locale: Locale | string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return {
    title: {
      template: `%s | ${dictionary.pages.metadata.title}`,
      default: dictionary.pages.metadata.title,
    },
    description: dictionary.pages.metadata.description,
    metadataBase: new URL(
      `https://www.ericpatrick.net${locale === "en" ? "" : `/${locale}`}`,
    ),
    generator: "Custom",
    applicationName: dictionary.pages.metadata.title,
    keywords: dictionary.pages.metadata.keywords,
    authors: [{ name: "Erick Patrick" }],
    creator: "Erick Patrick",
    publisher: "Erick Patrick",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale | string }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const { children } = props;

  return (
    <html lang={locale}>
      <body>
        <div className="container mx-auto p-4 py-8">
          <Header locale={locale as Locale} />
        </div>
        <div className="container mx-auto p-4 py-8">{children}</div>
        <Footer locale={locale as Locale} />
        <SpeedInsights />
      </body>
    </html>
  );
}
