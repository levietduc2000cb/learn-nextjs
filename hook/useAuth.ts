import { apiLogin, apiLogout } from "../api-custom";
import useSWR from "swr";
import { useRouter } from "next/router";

// export interface Data {
//   id?: string;
//   option?: Partial<PublicConfiguration>;
// }

export default function useAuth() {
  const router = useRouter();

  const {
    data: userInfor,
    isLoading,
    error,
    mutate,
    isValidating,
  } = useSWR(`/users/${1}`, {
    dedupingInterval: 4 * 1000,
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  const login = async (): Promise<void> => {
    await apiLogin();
    console.log("Login sucess");
    await mutate();
    console.log(userInfor);
    router.push("/home");
  };

  const logout = async (): Promise<void> => {
    await apiLogout();
    console.log("Logout success");
    mutate(null, false);
  };

  return { login, logout, userInfor, isLoading };
}
