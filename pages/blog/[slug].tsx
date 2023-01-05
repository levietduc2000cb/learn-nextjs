import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { Post } from "../../models/post";
import { getPostList } from "../../utils/getPostList";
import { Box, Container, Typography } from "@mui/material";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkRehype from "remark-rehype";
import remarkPrism from "remark-prism";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import Script from "next/script";
import Seo from "../../components/header/Seo";

export interface BlogDetailProps {
  blog: Post;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  return (
    <Box>
      <Seo
        title={blog.title}
        description={blog.description}
        url={"https://vercel.com/dashboard"}
        thumbaiUrl={blog.imgae || ""}
      />
      <Container>
        <Typography>Blog Detail</Typography>
        <Box>{blog.author?.name}</Box>
        <Box>{blog.title}</Box>
        <Box>{blog.description}</Box>
        <Box>
          <div
            dangerouslySetInnerHTML={{ __html: blog.htmlContent || "" }}
          ></div>
        </Box>
      </Container>
      {/* Script từ chỗ thư mục public */}
      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();
  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let slug: any = context.params?.slug;
  if (!slug) {
    return { notFound: true };
  }
  const postList = await getPostList();
  const blog = postList.find((post: Post) => post.slug === slug);
  if (!blog) {
    return { notFound: true };
  }

  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: "Contents" })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeDocument, { title: "Blog Detail" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(blog.mdContent || "");

  blog.htmlContent = String(file);

  return {
    // Passed to the page component as props
    props: {
      blog,
    },
  };
};
