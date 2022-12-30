import { useRouter } from "next/router";
import React, { useState } from "react";
import { apiLogin, apiGetUsers, apiLogout } from "../../api-custom";
import AuthorUser from "../../components/authorUsers";
import useAuth from "../../hook/useAuth";

const Auth = () => {
  const router = useRouter();
  // const [users, setUsers] = useState<Array<object>>([]);

  // const handleLogin = async (): Promise<void> => {
  //   try {
  //     await apiLogin();
  //     console.log("Login success");
  //   } catch (error) {
  //     console.log("Some thing went wrong");
  //   }
  // };

  // const handleGetUsers = async (): Promise<void> => {
  //   try {
  //     const getUsers = await apiGetUsers();
  //     setUsers(getUsers as unknown as Array<object>);
  //   } catch (error) {
  //     console.log("Something went wrong");
  //   }
  // };

  // const handleLogout = async (): Promise<void> => {
  //   try {
  //     await apiLogout();
  //     console.log("Logout success");
  //   } catch (error) {
  //     console.log("Something went wrong");
  //   }
  // };

  // console.log("Set Users", users);

  const { userInfor, login, logout } = useAuth();

  return (
    <div>
      <div>
        <button onClick={login}>Login</button>
        {/* <button onClick={handleGetUsers}>Get users</button> */}
        <button onClick={logout}>Logout</button>
        {/* <button onClick={() => router.push("/home")}>Home</button> */}
      </div>
      {/* <div>
        {users.length > 0 &&
          users.map((user: any, index) => {
            return <AuthorUser key={index} id={String(user.id)}></AuthorUser>;
          })}
      </div> */}
      <div>{userInfor && <div>{userInfor.name}</div>}</div>
    </div>
  );
};

export default Auth;
