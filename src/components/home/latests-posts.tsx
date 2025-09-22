import { Article, getTopThreearticles } from "@/app/artigos/articles";
import { toLocaleDateString } from "@/app/artigos/locale-date";
import Link from "next/link";

export default function LaterstPosts() {
  const latestArticles: Article[] = getTopThreearticles();
  const featuredArticle: Article = latestArticles.slice(0, 1)[0];
  const otherArticles: Article[] = latestArticles.slice(1, 3);

  return (
    <div>
      <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black">
        Últimos artigos que escrevi
      </h3>
      <div className="bg-white py-8 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
          <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
            <time
              dateTime={featuredArticle.date}
              className="block text-sm leading-6 text-gray-600"
            >
              {toLocaleDateString(featuredArticle.date, "pt-BR")}
            </time>
            <h2
              id="featured-post"
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {featuredArticle.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 line-clamp-3">
              {featuredArticle.excerpt}
            </p>
            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:gap-8 lg:mt-4 lg:flex-col">
              <div className="flex">
                <Link
                  href={`/artigos/${featuredArticle.slug}`}
                  className="text-sm font-semibold leading-6 text-blue-600 hover:underline hover:underline-offset-8 decoration-2"
                  aria-describedby="featured-post"
                >
                  Continuar lendo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>

          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="divide-y divide-gray-900/10">
              {otherArticles.map((article) => (
                <article
                  className="py-6 relative flex flex-wrap gap-x-3"
                  key={article.slug}
                >
                  <time
                    dateTime={article.date}
                    className="block text-sm leading-6 text-gray-600"
                  >
                    {toLocaleDateString(article.date, "pt-BR")}
                  </time>
                  <section className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                    <a
                      href={`/artigos/${article.slug}`}
                      className="hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600"
                    >
                      {article.title}
                    </a>
                  </section>
                  <section className="mt-2 w-full flex-none text-base leading-7 text-gray-600 line-clamp-2">
                    {article.excerpt}
                  </section>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
