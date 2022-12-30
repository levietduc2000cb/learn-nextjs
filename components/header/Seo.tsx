import Head from "next/head";
import React from "react";

export interface SeoProps {
  title: string;
  description: string;
  url: string;
  thumbaiUrl: string;
}

const Seo = ({ title, description, url, thumbaiUrl }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbaiUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbaiUrl} />
    </Head>
  );
};

export default Seo;
