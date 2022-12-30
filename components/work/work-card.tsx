import React from "react";
import { Stack, Box, Typography, Chip, Divider } from "@mui/material";
import { Work } from "../../models/work";
import Image from "next/image";

export interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <Box marginBottom={3.875}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2.25}
        paddingBottom={1.875}
      >
        <Box
          position="relative"
          height={{ xs: "246px", sm: "180px" }}
          width={{ xs: "100%", sm: "246px" }}
          flexShrink={0}
        >
          <Image src={work.thumbnailUrl} alt="work-image" fill></Image>
        </Box>
        <Box textAlign="left">
          <Typography fontWeight={700} fontSize={{ xs: 24, sm: 27, md: 30 }}>
            {work.title}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            marginTop={1.5}
            marginBottom={2.125}
          >
            <Chip
              label={work.createAt}
              sx={{ marginRight: "30px" }}
              color="primary"
            />
            <Typography
              fontSize={{ xs: "16px", md: "20px" }}
              sx={{ color: "#8695A4" }}
            >
              {work.tagList.join(" ")}
            </Typography>
          </Stack>
          <Typography>{work.shortDescription}</Typography>
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};

export default WorkCard;
