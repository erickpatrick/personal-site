import Divider from "@/components/home/divider";
import PersonalTraits from "@/components/home/personal-traits";
import PageTitle from "@/components/page-title";

export default function AboutRoot() {
  return (
    <>
      <PageTitle
        title="Sobre mim"
        description="Saiba mais sobre minha trajetória, habilidades e experiências."
      />
      <Divider />
      <PersonalTraits />
    </>
  );
}
