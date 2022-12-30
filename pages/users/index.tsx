import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";

export interface userId {
  listUserId: any[];
}

export default function Users(props: userId) {
  const { listUserId } = props;

  return (
    <ul>
      Danh sách người sử dụng
      {listUserId?.map((user: any) => {
        return (
          <Link key={user.id} href={`/users/${user.id}`} legacyBehavior>
            <a style={{ display: "block", color: "red" }}>{user.name}</a>
          </Link>
        );
      })}
    </ul>
  );
}
export const getStaticProps: GetStaticProps<userId> = async (
  context: GetStaticPropsContext
) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "Get",
  });
  const res = await data.json();

  return {
    props: {
      listUserId: res.map((data: any) => ({ id: data.id, name: data.name })),
    },
  };
};
