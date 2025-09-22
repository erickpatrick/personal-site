import PageTitle from "@/components/page-title";
import { getArticleBySlug } from "@/app/artigos/articles";
import { toLocaleDateString } from "@/app/artigos/locale-date";
import { notFound } from "next/navigation";
import markdownToHtml from "@/app/markdownToHtml";
import ReadingTime from "../reading-time";

export default async function ArticleViewRoot({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug as string);

  if (!article.content) {
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
          <ReadingTime contentLength={content} />
        </span>
      </PageTitle>
      <div className="max-w-5xl mx-auto">
        <div className="py-16 lg:py-24">
          <div
            className="prose-lg md:prose-xl lg:prose-2xl [&_ul]:list-disc [&_blockquote]:overflow-x-auto [&_blockquote]:border-l-4 [&_blockquote]:border-l-blue-300 [&_blockquote_p]:py-4 [&_pre]:overflow-x-auto [&_pre]:bg-blue-50 [&_pre]:shadow-sm [&_code]:break-words [&_code]:bg-blue-50 [&_a]:text-blue-600 [&_a]:hover:underline [&_a]:hover:underline-offset-8 [&_a]:decoration-2 [&_a]:decoration-wavy [&_a]:decoration-blue-600 [&_hr]:bg-slate-200 [&_table]:min-w-full [&_table]:divide-y [&_table]:divide-gray-300 [&_th]:py-3.5 [&_th]:pl-4 [&_th]:pr-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-gray-900 [&_th]:sm:pl-0 [&_tbody]:divide-y [&_tbody]:divide-gray-200 [&_td]:py-4 [&_td]:pl-4 [&_td]:pr-3 [&_td]:text-gray-900 [&_td]:sm:pl-0 [&_h3]:font-semibold [&_h4]:font-semibold [&_h5]:font-italic mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </>
  );
}
