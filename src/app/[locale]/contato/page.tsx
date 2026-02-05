import Divider from "@/components/home/divider";
import PageTitle from "@/components/page-title";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { Metadata, ResolvingMetadata } from "next";

type MetadataProps = {
  params: Promise<{ slug: string; locale: Locale }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  let keywords = [...(parentMetadata.keywords || [])];
  keywords.push(...dictionary.pages.contacts.keywords);

  return {
    title: dictionary.pages.contacts.title,
    description: dictionary.pages.contacts.description,
    keywords: keywords,
    alternates: {
      canonical: `/${locale}/contato`,
      languages: {
        "en-us": "/en-us/contato",
        "pt-br": "/pt-br/contato",
      },
    },
  };
}

export default async function ContactsRoot(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;
  const dictionary = await getDictionary(locale);
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
        title={dictionary.pages.contacts.title}
        description={dictionary.pages.contacts.description}
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
