import { GetStaticProps, GetStaticPropsContext } from "next";
import MainLayout from "../../components/layout";
import { NextPageWithLayout } from "../../models/common";
import { Post } from "../../models/post";
import { getPostList } from "../../utils/getPostList";
import BlogList from "../../components/blog/blog-list";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";

export interface BlogPageProps {
  posts: Post[];
}

const BlogPage: NextPageWithLayout<BlogPageProps> = ({
  posts,
}: BlogPageProps) => {
  return (
    <Container>
      <Typography
        marginTop={11.25}
        marginBottom={6}
        variant="h3"
        fontWeight={700}
      >
        Blog
      </Typography>
      <Box>
        <BlogList blogList={posts}></BlogList>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const dataPostList = await getPostList();

  return {
    props: {
      posts: dataPostList,
    },
  };
};

BlogPage.Layout = MainLayout;
export default BlogPage;
