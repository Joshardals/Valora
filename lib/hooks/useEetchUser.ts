import { useQuery } from "@tanstack/react-query";
import { currentUser } from "../actions/auth/auth.action";
import { fetchUserInfo } from "../actions/users/user.action";

const fetchUserData = async () => {
  const userId = await currentUser();
  if (!userId) throw new Error("User not found");
  const user = await fetchUserInfo(userId);
  return user;
};

export const useFetchUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });
};
