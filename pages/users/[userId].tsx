import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export interface user {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function UserDetail(props: user) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      <li>{props.id}</li>
      <li>{props.name}</li>
      <li>{props.email}</li>
      <li>{props.phone}</li>
    </ul>
  );
}

// export async function getStaticPaths() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//   });
//   const res = await data.json();

//   return {
//     paths: res.map((userId: any) => ({
//       params: {
//         userId: userId.id.toString(),
//       },
//     })),
//     fallback: false, // can also be true or 'blocking'
//   };
// }

export const getStaticPaths: GetStaticPaths = async () => {
  // let data = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   method: "GET",
  // });
  // let res = await data.json();

  // return {
  //   paths: res.map((userId: any) => ({
  //     params: {
  //       userId: userId.id.toString(),
  //     },
  //   })),
  //   fallback: false, // can also be true or 'blocking'
  // };

  return {
    paths: [
      {
        params: {
          userId: "1",
        },
      },
      {
        params: {
          userId: "2",
        },
      },
      {
        params: {
          userId: "3",
        },
      },
      {
        params: {
          userId: "4",
        },
      },
      {
        params: {
          userId: "5",
        },
      },
    ],
    fallback: true, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let idU: any = context.params?.userId;
  if (!idU) {
    return { notFound: true };
  }

  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${idU}`);
  let resJson = await res.json();

  return {
    // Passed to the page component as props
    props: {
      id: resJson.id,
      name: resJson.name,
      email: resJson.email,
      phone: resJson.phone,
    },
  };
};
