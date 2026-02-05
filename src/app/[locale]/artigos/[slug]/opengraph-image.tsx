import { ImageResponse } from "next/og";
import { getArticleBySlug } from "../articles";
import { Locale } from "@/i18n-config";

export const alt = "About Acme";
export const size = {
  width: 600,
  height: 480,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string; locale: Locale };
}) {
  const { locale, slug } = await params;
  const post = getArticleBySlug(locale, slug);

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "-.02em",
        fontWeight: 700,
        background: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 15,
          left: 20,
          height: 50,
          width: 50,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transformOrigin: "center",
            transform: "rotate(-6deg)",
            border: "4px solid #e5e7eb",
          }}
        >
          <h1
            style={{
              marginTop: -4,
              marginLeft: 2,
              padding: "4px",
              backgroundColor: "transparent",
              color: "#1e2939",
              transform: "rotate(6deg)",
              fontWeight: 900,
            }}
          >
            EP
          </h1>
        </div>
        <span style={{ padding: 12 }}>ErickPatrick.net</span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px 50px",
          margin: "0 42px",
          fontSize: 40,
          width: "auto",
          maxWidth: 550,
          textAlign: "center",
          color: "black",
          lineHeight: 1.4,
          textDecoration: "underline",
          textDecorationColor: "#155dfc",
          textDecorationStyle: "dotted",
          textDecorationThickness: 4,
          textUnderlineOffset: 16,
        }}
      >
        {post.title}
      </div>
      <span
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          bottom: 15,
          left: 10,
          right: 10,
          fontSize: 12,
          padding: 8,
        }}
      >
        https://www.erickpatrick.net/{locale}/{post.slug}
      </span>
    </div>,
    {
      ...size,
    },
  );
}
