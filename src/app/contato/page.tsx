import Divider from "@/components/home/divider";
import PageTitle from "@/components/page-title";

export const metadata = {
  title: "Contato",
  description:
    "Caso queira contatar-me, aqui estão algumas das formas mais rápidas que você pode usar para entrar em contato comigo a qualquer momento",
};

export default function ContactsRoot() {
  const contacts = [
    { type: "Email", value: "itsme[at]erickpatrick.net" },
    {
      type: "Twitter",
      value: "@erickpatrick",
      href: "https://twitter.com/erickpatrick",
    },
    {
      type: "LinkedIn",
      value: "/in/erickpatrick",
      href: "https://www.linkedin.com/in/erickpatrick",
    },
    {
      type: "GitHub",
      value: "/erickpatrick",
      href: "https://github.com/erickpatrick",
    },
    {
      type: "Instagram",
      value: "@itsmeerickpatrick",
      href: "https://www.instagram.com/itsmeerickpatrick",
    },
  ];
  return (
    <>
      <PageTitle
        title="Contato"
        description="Caso queira contatar-me, aqui estão algumas das formas mais rápidas que você pode usar para entrar em contato comigo a qualquer momento"
      />

      <Divider />

      <div className="text-center grid grid-cols-1 sm:grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
        {contacts.map((contact, index) => (
          <div className="bg-blue-600/5 p-8 sm:p-10" key={`contact-${index}`}>
            <span className="inline-block">
              <span className="block text-xl font-semibold -mb-2 mt-2">
                {contact.type}
              </span>
              <a
                className="block text-2xl font-black hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600"
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.value}
              </a>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
