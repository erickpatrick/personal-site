import PageTitle from "@/components/page-title";
import { getArticleBySlug } from "@/app/artigos/articles";
import { toLocaleDateString } from "@/app/artigos/locale-date";
import { notFound } from "next/navigation";
import markdownToHtml from "@/app/markdownToHtml";

export default async function ArticleViewRoot({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug as string);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content || "");

  return (
    <>
      <PageTitle title={article.title}>
        <time
          dateTime={article.date}
          className="block text-sm leading-6 text-gray-600"
        >
          {toLocaleDateString(article.date, "pt-BR")}
        </time>
        <span className="block text-sm leading-6 text-gray-600">
          2min e 20s de leitura
        </span>
      </PageTitle>
      <div className="max-w-5xl mx-auto">
        <div className="py-16 lg:py-24">
          <div
            className="prose-lg md:prose-xl lg:prose-2xl [&_ul]:list-disc [&_blockquote]:border-l-4 [&_blockquote]:border-blue-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_pre]:bg-slate-100 [&_code]:bg-slate-100 [&_a]:text-blue-600 [&_a]:hover:underline [&_a]:hover:underline-offset-8 [&_a]:decoration-2 [&_a]:decoration-wavy [&_a]:decoration-blue-600 [&_hr]:bg-slate-200  mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </>
  );
}
