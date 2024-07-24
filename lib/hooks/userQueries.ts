import { useQuery } from "@tanstack/react-query";
import { currentUser } from "../actions/auth/auth.action";
import { fetchUserInfo, fetchUserRole } from "../actions/users/user.action";

// Function to Fetch User Data
const fetchUserData = async () => {
  const userId = await currentUser();
  if (!userId) throw new Error("User not found");
  const user = await fetchUserInfo(userId);

  return user;
};

// Function to check for Admin Priviledges
const checkUserRoles = async () => {
  const userId = await currentUser();
  if (!userId) throw new Error("User not found");
  const role = await fetchUserRole(userId!);

  if (role !== "admin") {
    throw new Error("Unauthorized Access");
  }

  return role;
};

// Hook to fetch user data
export const useFetchUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

// Hook to check User Role
export const useFetchRole = () => {
  return useQuery({
    queryKey: ["checkRole"],
    queryFn: checkUserRoles,
    retry: false,
  });
};
