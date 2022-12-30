import { GetStaticProps, GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

// import List from "../../components/List";
const DynamicList = dynamic(() => import("../../components/List"), {
  ssr: false,
});

export interface user {
  id: number;
  name: string;
}

export default function About() {
  // const [page, setPage] = useState<number>(1);
  const [user, setUser] = useState<user>();

  const router = useRouter();

  let pageUrl: any = router.query?.page;

  // const handleClick = () => {
  //   if (page === 10) {
  //     return setPage(1);
  //   }
  //   return setPage(page + 1);
  // };

  const handleClick = () => {
    if (Number(pageUrl) >= 10) {
      pageUrl = 0;
    }
    router.push(
      {
        pathname: "/about",
        query: {
          page: Number(pageUrl) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    if (!pageUrl) return;
    (() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${pageUrl}`)
        .then(data => {
          return data.json();
        })
        .then(res => {
          setUser({ id: res.id, name: res.name });
        })
        .catch(err => {});
    })();
  }, [pageUrl]);

  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <DynamicList></DynamicList>
      <div>{user?.id}</div>
      <div>{user?.name}</div>
      <button onClick={handleClick}>Click get detail User</button>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log("Chay phia server");
  return {
    props: {},
  };
};
