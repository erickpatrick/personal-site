import { Locale } from "@/i18n-config";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  preview?: boolean;
};

const articlesDirectory: string = join(process.cwd(), "src/_posts");

export function getArticlesSlugs(locale: Locale): string[] {
  return fs.readdirSync(join(articlesDirectory, locale));
}

export function getArticleBySlug(locale: Locale, slug: string): Article {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, locale, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Article;
  } catch (error: unknown) {
    console.log(error);
    return { content: "" } as Article;
  }
}

export function getAllArticles(locale: Locale): Article[] {
  const slugs = getArticlesSlugs(locale);
  const articles = slugs
    .map((slug) => getArticleBySlug(locale, slug))
    .sort((articleA, articleB) => (articleA.date > articleB.date ? -1 : 1));
  return articles;
}

export function getTopThreearticles(locale: Locale): Article[] {
  return getAllArticles(locale)
    .sort((a, b) => (a > b ? -1 : 1))
    .slice(0, 3);
}
