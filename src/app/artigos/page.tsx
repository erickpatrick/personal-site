import PageTitle from "@/components/page-title";
import { getAllArticles } from "@/app/artigos/articles";
import Link from "next/link";
import { toLocaleDateString } from "@/app/artigos/locale-date";

export const metadata = {
  title: "Artigos",
  description:
    "Minhas opiniões, descobertas e aprendizados sobre design de sistemas, programação, e tópicos relacionados",
};

export default function ArticlesRoot() {
  const articles = getAllArticles();
  return (
    <>
      <PageTitle
        title="Artigos"
        description="Minhas opiniões, descobertas e aprendizados sobre design de sistemas, programação, e tópicos relacionados"
      />

      <div className="max-w-5xl mx-auto py-16 md:py-24 grid gap-16">
        {articles.map((article) => (
          <div key={article.slug}>
            <time
              dateTime={article.date}
              className="block text-sm leading-6 text-gray-600"
            >
              {toLocaleDateString(article.date, "pt-BR")}
            </time>
            <h3 className="block text-lg sm:text-xl md:text-xl lg:text-3xl font-bold">
              <Link
                className="hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600"
                href={`/artigos/${article.slug}`}
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
