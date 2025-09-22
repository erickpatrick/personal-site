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

export function getArticlesSlugs(): string[] {
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string): Article {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Article;
  } catch (_error: unknown) {
    return { content: "" } as Article;
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticlesSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((articleA, articleB) => (articleA.date > articleB.date ? -1 : 1));
  return articles;
}

export function getTopThreearticles(): Article[] {
  return getAllArticles()
    .sort((a, b) => (a > b ? -1 : 1))
    .slice(0, 3);
}
