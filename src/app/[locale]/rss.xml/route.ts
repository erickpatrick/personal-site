import { getAllArticles } from "../artigos/articles";

export async function GET(request: Request) {
  const articles = getAllArticles();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
 <title>Site Pessoal de Erick Patrick</title>
 <description>Esse é o site pessoal de Erick Patrick, onde ele compartilha um pouco de sua experiência e habilidades através de artigos, entrevistas, vídeos e muito mais</description>
 <link>https://www.erickpatrick.net</link>
 <copyright>Erick Patrick</copyright>
 ${articles.map((article) => {
   return `<item>
    <title>${article.title}</title>
    <description>${article.excerpt}</description>
    <link>/artigos/${article.slug}</link>
    <pubDate>${article.date}</pubDate>
    <guid isPermaLink="false">${article.slug}</guid>
 </item>`;
 })}
</channel>
</rss>`;

  const headers = new Headers({ "content-type": "application/xml" });

  return new Response(rssFeed, { headers });
}
