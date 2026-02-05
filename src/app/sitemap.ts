import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.erickpatrick.net",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://www.erickpatrick.net/en-us",
        },
      },
    },
    {
      url: "https://www.erickpatrick.net/pt-br/sobre",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://www.erickpatrick.net/en-us/sobre",
        },
      },
    },
    {
      url: "https://www.erickpatrick.net/pt-br/projetos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://www.erickpatrick.net/en-us/projetos",
        },
      },
    },
    {
      url: "https://www.erickpatrick.net/pt-br/contato",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://www.erickpatrick.net/en-us/contato",
        },
      },
    },
    {
      url: "https://www.erickpatrick.net/pt-br/artigos",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        languages: {
          en: "https://www.erickpatrick.net/en-us/artigos",
        },
      },
    },
  ];
}
