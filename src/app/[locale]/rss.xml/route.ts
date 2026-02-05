import { Locale } from "@/i18n-config";
import { getAllArticles } from "../artigos/articles";
import { getDictionary } from "@/get-dictionaries";

export async function GET(
  request: Request,
  ctx: RouteContext<"/[locale]/rss.xml">,
) {
  const { locale } = await ctx.params;
  const articles = getAllArticles(locale as Locale);
  const dictionary = await getDictionary(locale as Locale);

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
 <title>${dictionary.pages.home.title}</title>
 <description>${dictionary.pages.home.description}</description>
 <link>https://www.erickpatrick.net${locale !== "pt-br" ? `/${locale}` : ""}</link>
 <copyright>Erick Patrick</copyright>
 ${articles.map((article) => {
   return `<item>
    <title>${article.title}</title>
    <description>${article.excerpt}</description>
    <link>/${locale}/artigos/${article.slug}</link>
    <pubDate>${article.date}</pubDate>
    <guid isPermaLink="false">${article.slug}</guid>
 </item>`;
 })}
</channel>
</rss>`;

  const headers = new Headers({ "content-type": "application/xml" });

  return new Response(rssFeed, { headers });
}
