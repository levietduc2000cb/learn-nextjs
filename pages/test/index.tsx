import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export interface testId {
  id: number;
}

const Test = (props: testId) => {
  return <div>Test Server Rendering</div>;
};

export const getServerSideProps: GetServerSideProps<testId> = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader(
    "Cache-Control",
    "s-maxage=10, stale-while-revalidate=59"
  );
  console.log("Server Side Rendering");

  await new Promise<void>((resolve, reject) => {
    setTimeout(resolve, 5000);
  });

  return { props: { id: 1 } };
};

export default Test;
