import { Box } from "@mui/material";
import { Post } from "../../models/post";
import BlogCard from "./blog-card";

export interface BlogListProps {
  blogList: Post[];
}

const BlogList = ({ blogList }: BlogListProps) => {
  return (
    <Box>
      {blogList?.map((blog, index) => {
        return <BlogCard key={index} blog={blog} />;
      })}
    </Box>
  );
};

export default BlogList;
