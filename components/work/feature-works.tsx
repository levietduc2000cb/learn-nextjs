import { Box, Container, Typography } from "@mui/material";
import { Work } from "../../models/work";
import WorkList from "./work-list";

const WORK_LIST: Work[] = [
  {
    id: "1",
    title: "Designing Dashboards",
    tagList: ["Dashboard"],
    shortDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    fullDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    createAt: "2022",
    updateAt: "2022",
    thumbnailUrl:
      "https://res.cloudinary.com/dg5r0cyek/image/upload/v1672304252/portfolio/jlel8ct7z50nskrwpnsb.jpg",
  },
  {
    id: "2",
    title: "Vibrant Portraits of 2020",
    tagList: ["Illustration"],
    shortDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    fullDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    createAt: "2022",
    updateAt: "2022",
    thumbnailUrl:
      "https://res.cloudinary.com/dg5r0cyek/image/upload/v1672304253/portfolio/jmvku8iimqevtrfbpiyp.jpg",
  },
  {
    id: "3",
    title: "36 Days of Malayalam type",
    tagList: ["Typography"],
    shortDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    fullDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    createAt: "2022",
    updateAt: "2022",
    thumbnailUrl:
      "https://res.cloudinary.com/dg5r0cyek/image/upload/v1672304252/portfolio/k1oypzbfootpvzced300.jpg",
  },
];

const FeatureWorks = () => {
  return (
    <Box component="section">
      <Container>
        <Typography
          height="60px"
          fontSize={{ xs: "18px", md: "22px" }}
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          Featured works
        </Typography>
        <WorkList workList={WORK_LIST} />
      </Container>
    </Box>
  );
};

export default FeatureWorks;
