import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import PostCard from "./post-card";
import { Post } from "../../models/post";

const POST_LIST: Post[] = [
  {
    id: "1",
    title: "Making a design system from scratch",
    publishedDate: "12 Feb 2022",
    tagList: ["Design", "Pattern"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "2",
    title: "Making a design system from scratch",
    publishedDate: "12 Feb 2022",
    tagList: ["Design", "Pattern"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "3",
    title: "Making a design system from scratch",
    publishedDate: "12 Feb 2022",
    tagList: ["Design", "Pattern"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "4",
    title: "Making a design system from scratch",
    publishedDate: "12 Feb 2022",
    tagList: ["Design", "Pattern"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const RecentPosts = () => {
  return (
    <Box bgcolor={"secondary.light"} paddingBottom={4}>
      <Container>
        <Stack
          direction="row"
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
          height={"60px"}
        >
          <Typography fontSize={{ xs: "18px", md: "22px" }}>
            Recent posts
          </Typography>
          <Box display={{ xs: "none", md: "inline-block" }}>
            <Link href={"/view-all"} legacyBehavior passHref>
              <MuiLink color={"secondary.main"}>View all</MuiLink>
            </Link>
          </Box>
        </Stack>
        <Grid container spacing={{ xs: 2.1, md: 2.5 }}>
          {POST_LIST.map(post => {
            return (
              <Grid key={post.id} item xs={12} md={6}>
                <PostCard post={post} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecentPosts;
