import {
  Box,
  Typography,
  Stack,
  Divider,
  Link as LinkMui,
} from "@mui/material";
import Link from "next/link";
import { Post } from "../../models/post";

export interface BlogProps {
  blog: Post;
}

const BlogCard = ({ blog }: BlogProps) => {
  console.log(blog);
  return (
    <Link href={`blog/${blog.slug}`} legacyBehavior passHref>
      <LinkMui
        sx={{
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        <Box textAlign="left">
          <Typography
            fontWeight={500}
            fontSize={{ xs: 24, sm: 27, md: 30 }}
            lineHeight={1}
          >
            {blog.title}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            marginTop={1.5}
            marginBottom={2}
          >
            <Typography fontSize={20} fontWeight={400} lineHeight={1}>
              {blog.publishedDate}
            </Typography>
            <Divider
              sx={{ width: "0.1px", marginX: 2.4, backgroundColor: "#000000" }}
              orientation="vertical"
              flexItem
            />
            <Typography
              fontSize={20}
              fontWeight={400}
              sx={{ color: "#8695A4" }}
              lineHeight={1}
            >
              {blog.tagList.join(" ")}
            </Typography>
          </Stack>
          <Typography>{blog.description}</Typography>
        </Box>
        <Divider />
      </LinkMui>
    </Link>
  );
};

export default BlogCard;
