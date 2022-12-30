import MainLayout from "../../components/layout";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { NextPageWithLayout } from "../../models/common";
import { getPostList } from "../../utils/getPostList";

export interface BlogPageProps {}

const BlogPage: NextPageWithLayout = (props: BlogPageProps) => {
  return <div>Blog Page</div>;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const dataPostList = await getPostList();

  return {
    props: {},
  };
};

BlogPage.Layout = MainLayout;
export default BlogPage;
