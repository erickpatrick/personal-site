import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Site pessoal de Erick Patrick",
    default: "Site pessoal de Erick Patrick",
  },
  description:
    "Esse é o site pessoal de Erick Patrick, onde ele compartilha um pouco de sua experiência e habilidades através de artigos, entrevistas, vídeos e muito mais",
  metadataBase: new URL("https://www.ericpatrick.net"),
  generator: "Custom",
  applicationName: "Site Pessoal de Erick Patrick",
  keywords: [
    "Erick Patrick",
    "Alvarenga Rocha",
    "Arquiteto de Software",
    "Desenvolvedor",
    "Programador",
    "Engenheiro de Software",
    "Consultor",
    "Palestrante",
    "Instrutor",
    "Mentor",
    "Tecnologia",
    "Software",
    "Desenvolvimento de Software",
    "Arquitetura de Software",
    "Carreira em Tecnologia",
    "Dicas de Programação",
    "Tutoriais de Programação",
    "Artigos Técnicos",
  ],
  authors: [{ name: "Erick Patrick" }],
  creator: "Erick Patrick",
  publisher: "Erick Patrick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="container mx-auto p-4 py-8">
          <Header />
        </div>
        <div className="container mx-auto p-4 py-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
