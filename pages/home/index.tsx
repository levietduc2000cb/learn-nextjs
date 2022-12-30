import { Box } from "@mui/material";
import MainLayout from "../../components/layout";
import { NextPageWithLayout } from "../../models/common";
import HeroSection from "../../components/home/hero";
import RecentPosts from "../../components/home/recent-posts";
import FeatureWorks from "../../components/work/feature-works";
import Seo from "../../components/header/Seo";

const Home: NextPageWithLayout = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Seo
        title="Học NextJS — Cách làm một trang web với nextjs cơ bản"
        description="Với nextjs bạn có thể tạo ra các trang web với loại như SSR, CSR, SSR và hơn hết khóa học cũng cung cấp cho bạn cái nhìn tổng quan trong dự án thực tế"
        url="https://vercel.com/dashboard"
        thumbaiUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Farticles.wesionary.team%2Fgetting-started-with-next-js-and-create-your-first-application-using-next-js-1409709479a5&psig=AOvVaw1blH3hbzeCrm4OR6Pyds7_&ust=1672454591642000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCbuICpoPwCFQAAAAAdAAAAABAE"
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
