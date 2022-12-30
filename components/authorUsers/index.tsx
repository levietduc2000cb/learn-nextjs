import React from "react";
import useSWR from "swr";

export interface UserId {
  id: string;
}

const AuthorUser = (props: UserId) => {
  const { id } = props;

  const { data, isLoading, error, isValidating, mutate } = useSWR(
    `/users/${id}`,
    {
      dedupingInterval: 4 * 1000,
      revalidateOnMount: false,
    }
  );

  const handleClick = (): void => {
    mutate({ name: "Loading..." }, true);
  };

  return <div onClick={handleClick}>{data ? data.name : "Loading..."}</div>;
};

export default AuthorUser;
