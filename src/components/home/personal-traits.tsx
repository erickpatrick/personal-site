import { Locale } from "@/i18n-config";
import Image from "next/image";

export default function PersonalTraits({ locale }: { locale: Locale }) {
  const traits = {
    "pt-br": [
      {
        title: "Brasileiro.",
        description:
          "Nascido em Roraima e criado no Piauí, onde construí parte da minha vida. Morei lá até os meus 27 anos.",
        icon: "globe-alt.svg",
      },
      {
        title: "Poliglota.",
        description:
          "Além do Português, também entendo e falo em Inglês (C2), Espanhol (B1), e Alemão (A2/B1).",
        icon: "language.svg",
      },
      {
        title: "20 anos de experiência.",
        description:
          "Comecei na época do Frontpage. Foquei meus trabalhos em sistemas web e mobile.",
        icon: "sparkles.svg",
      },
      {
        title: "Cientista da Computação.",
        description:
          "Formado pela Universidade Estadual do Piauí — UESPI, com muito orgulho.",
        icon: "academic-cap.svg",
      },
      {
        title: "eCommerce.",
        description:
          "Minha carreira na Europa é 100% voltada para criação de grandes lojas online internacionais.",
        icon: "shopping-bag.svg",
      },
      {
        title: "Arquitetura de Sistemas.",
        description:
          "Tenho trabalhado mais na arquitetura e modelagem de sistemas que em programação.",
        icon: "puzzle-piece.svg",
      },
    ],
    "en-us": [
      {
        title: "Brazilian.",
        description:
          "Born in Roraima and raised in Piauí, where I built part of my life. I lived there until I was 27.",
        icon: "globe-alt.svg",
      },
      {
        title: "Polyglot.",
        description:
          "In addition to Portuguese, I also understand and speak English (C2), Spanish (B1), and German (A2/B1).",
        icon: "language.svg",
      },
      {
        title: "20 years of experience.",
        description:
          "I started back in the Frontpage era. I focused my work on web and mobile systems.",
        icon: "sparkles.svg",
      },
      {
        title: "Computer Scientist.",
        description:
          "Graduated from the State University of Piauí — UESPI, with great pride.",
        icon: "academic-cap.svg",
      },
      {
        title: "eCommerce.",
        description:
          "My career in Europe is 100% focused on creating large international online stores.",
        icon: "shopping-bag.svg",
      },
      {
        title: "System Architecture.",
        description:
          "I have worked more on system architecture and modeling than on programming.",
        icon: "puzzle-piece.svg",
      },
    ],
  };
  return (
    <dl className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 text-xl leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
      {traits[locale].map((trait) => (
        <div className="relative pl-9" key={trait.title}>
          <dt className="inline font-semibold text-gray-900">
            <Image
              src={`/assets/${trait.icon}`}
              alt={trait.title}
              width={24}
              height={24}
              className="absolute left-1 top-1 h-6 w-6 text-blue-600"
            />
            <span className="text-blue-600">{trait.title}</span>&nbsp;
          </dt>

          <dd className="inline text-gray-600">{trait.description}</dd>
        </div>
      ))}
    </dl>
  );
}
