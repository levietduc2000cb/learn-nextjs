import { Box } from "@mui/material";
import MainLayout from "../../components/layout";
import { NextPageWithLayout } from "../../models/common";
import HeroSection from "../../components/home/hero";
import RecentPosts from "../../components/home/recent-posts";
import FeatureWorks from "../../components/work/feature-works";

const Home: NextPageWithLayout = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
