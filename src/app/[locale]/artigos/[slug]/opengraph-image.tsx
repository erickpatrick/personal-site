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
  const post = getArticleBySlug(params.locale, params.slug);

  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          display: "flex",
          backgroundColor: "black",
          color: "white",
          padding: "12px 16px",
          fontSize: 48,
        }}
      >
        {post.title}
      </p>
      <p style={{ fontSize: "24" }}>{post.excerpt}</p>
    </div>,
    {
      ...size,
    },
  );
}
