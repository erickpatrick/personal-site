import Divider from "@/components/home/divider";
import Hero from "@/components/home/hero";
import LaterstPosts from "@/components/home/latests-posts";
import Projects from "@/components/home/projects";
import { Locale } from "@/i18n-config";

export default async function Home(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;
  return (
    <>
      <div className="container mx-auto p-4 py-8">
        <Hero locale={locale} />
        <Divider />
      </div>
      <Projects locale={locale} />
      <Divider />
      <LaterstPosts locale={locale} />
    </>
  );
}
