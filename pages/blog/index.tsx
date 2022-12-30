import MainLayout from "../../components/layout";
import { NextPageWithLayout } from "../../models/common";

export interface BlogPageProps {}

const BlogPage: NextPageWithLayout = (props: BlogPageProps) => {
  return <div>Blog Page</div>;
};

BlogPage.Layout = MainLayout;
export default BlogPage;
