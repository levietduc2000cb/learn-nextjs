import { Box } from "@mui/material";
import { Work } from "../../models/work";
import WorkCard from "./work-card";

export interface WorkListProps {
  workList: Work[];
}

const WorkList = ({ workList }: WorkListProps) => {
  return (
    <Box>
      {workList?.map(work => {
        return <WorkCard key={work.id} work={work} />;
      })}
    </Box>
  );
};

export default WorkList;
