import React from "react";
import MainLayout from "../../components/layout";
import { NextPageWithLayout } from "../../models/common";
import Link from "next/link";

const Detail: NextPageWithLayout = () => {
  return (
    <div>
      <Link href="/home">Home</Link>
      Đây là trang Detail
    </div>
  );
};

Detail.Layout = MainLayout;

export default Detail;
