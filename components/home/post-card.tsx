import React from "react";
import { Card, CardContent, Typography, Stack, Divider } from "@mui/material";
import { Post } from "../../models/post";

export interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography
          fontWeight={700}
          fontSize={{ xs: "22px", md: "26px" }}
          textAlign="left"
          marginBottom={2.1}
        >
          {post.title}
        </Typography>
        <Stack direction="row" marginBottom={1.3}>
          <Typography fontSize={{ xs: "16px", md: "18px" }} lineHeight={1}>
            {post.publishedDate}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ width: "0.1px", marginX: 3, backgroundColor: "#000000" }}
          />
          <Typography fontSize={{ xs: "16px", md: "18px" }} lineHeight={1}>
            {post.tagList.map((tag, index) => {
              return (
                <span key={index}>{index === 0 ? `${tag}` : `, ${tag}`}</span>
              );
            })}
          </Typography>
        </Stack>
        <Typography textAlign="left">{post.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
