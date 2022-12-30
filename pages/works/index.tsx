import MainLayout from "../../components/layout";
import { NextPageWithLayout } from "../../models/common";
export interface WorksPageProps {}

const WorksPage: NextPageWithLayout = (props: WorksPageProps) => {
  return <div>Works Page</div>;
};

WorksPage.Layout = MainLayout;

export default WorksPage;
