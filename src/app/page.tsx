import Divider from "@/components/home/divider";
import Hero from "@/components/home/hero";
import LaterstPosts from "@/components/home/latests-posts";
import PersonalTraits from "@/components/home/personal-traits";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 py-8">
        <Hero />
        <Divider />
        <PersonalTraits />
        <Divider />
      </div>
      <LaterstPosts />
      <Divider />
      <Projects />
    </>
  );
}
