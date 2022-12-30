import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import useAuth from "../../hook/useAuth";

export interface ChildrenProps {
  children: ReactNode;
}

const Auth = ({ children }: ChildrenProps) => {
  const { userInfor } = useAuth();
  const router = useRouter();
  let element: ReactNode = userInfor ? children : <div>Loading...</div>;

  useEffect(() => {
    console.log("userInforAuth", userInfor);
    if (!userInfor) {
      router.push("/auth");
    }
  }, [userInfor, router]);

  return <>{element}</>;
};

export default Auth;
