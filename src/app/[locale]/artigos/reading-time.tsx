import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { get } from "http";

export default async function ReadingTime({
  contentLength,
  locale,
}: {
  contentLength: string;
  locale: Locale;
}) {
  const words = contentLength.trim().split(/\s+/).length;
  const estimatedTime = Math.ceil(words / 185);
  const dictionary = await getDictionary(locale);

  return (
    <span className="block text-sm leading-6 text-gray-600">
      {`${estimatedTime}${dictionary.pages.articles.readingTime}`}
    </span>
  );
}
