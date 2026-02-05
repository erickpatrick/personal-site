import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";

export default async function Hero({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale);

  return (
    <>
      <div className="max-w-5xl mx-auto text-center mt-8 sm:mt-16 md:mt-32">
        <div className="inline-block px-4 origin-center rotate-1 border-4 border-gray-200">
          <small className="text-sm sm:text-base md:text-lg uppercase font-semibold origin-center -rotate-1">
            {dictionary.hero.title}
          </small>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
          {dictionary.hero.subtitle.part1}
          <em className="font-serif font-light text-blue-600">
            {dictionary.hero.subtitle.part2}
          </em>
          {dictionary.hero.subtitle.part3}
        </h2>
      </div>
    </>
  );
}
