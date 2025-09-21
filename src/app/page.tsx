import Divider from "@/components/home/divider";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Projects />
    </>
  );
}
