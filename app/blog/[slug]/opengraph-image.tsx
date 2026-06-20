import { ImageResponse } from "next/og";
import { getPost, getAllSlugs } from "@/lib/blog";

export const alt = "Switch — Windows to Mac";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Per-post social share card. Rendered at build, used only as the link
// preview image. It never appears inside the post.
export default function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const title = post?.title ?? "Switch";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F6F9",
          padding: "76px 80px",
          fontFamily: "sans-serif",
          borderTop: "10px solid #2F6BFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 3,
              color: "#2F6BFF",
            }}
          >
            SWITCH
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 700,
            color: "#14161B",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#6E747F",
          }}
        >
          <div style={{ display: "flex" }}>switchtomac.app</div>
          <div style={{ display: "flex" }}>Windows to Mac, made easy</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
