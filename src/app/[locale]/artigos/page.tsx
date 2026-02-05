import PageTitle from "@/components/page-title";
import { getAllArticles } from "@/app-locale/artigos/articles";
import Link from "next/link";
import { toLocaleDateString } from "@/app-locale/artigos/locale-date";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Divider from "@/components/home/divider";
import { Metadata, ResolvingMetadata } from "next";

type MetadataProps = {
  params: Promise<{ slug: string; locale: Locale }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  let keywords = [...(parentMetadata.keywords || [])];
  keywords.push(...dictionary.pages.articles.keywords);

  return {
    title: dictionary.pages.articles.title,
    description: dictionary.pages.articles.description,
    keywords: keywords,
  };
}

export default async function ArticlesRoot(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;
  const articles = getAllArticles(locale);
  const dictionary = await getDictionary(locale);
  return (
    <>
      <PageTitle
        title={dictionary.pages.articles.title}
        description={dictionary.pages.articles.description}
      />

      <Divider />

      <div className="max-w-5xl mx-auto grid gap-16">
        {articles.map((article) => (
          <div key={article.slug}>
            <time
              dateTime={article.date}
              className="block text-sm leading-6 text-gray-600"
            >
              {toLocaleDateString(article.date, locale)}
            </time>
            <h3 className="block text-lg sm:text-xl md:text-xl lg:text-3xl font-bold">
              <Link
                className="hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600"
                href={`/${locale}/artigos/${article.slug}`}
              >
                {article.title}
              </Link>
            </h3>
            <p className="mt-3 text-gray-600 md:text-lg lg:text-xl">
              {article.excerpt}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
