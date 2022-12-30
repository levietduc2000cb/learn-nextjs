import React from "react";
import { useRouter } from "next/router";

const AboutId = () => {
  const router = useRouter();

  console.log("About Id", router.query);

  return <div>Day la trang About Id</div>;
};

export default AboutId;
