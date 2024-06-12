import { fetchUserData, logoutUser } from "@/lib/actions/auth/auth.action";
import { useUserStore } from "@/lib/store/store";
import { useEffect } from "react";
import { Button } from "../ui/button";

export default function UserAccount() {
  const { userId, setUserId } = useUserStore();

  const handleLogout = async () => {
    await logoutUser();
    setUserId("");
  };
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetchUserData(userId);
        const userData = await response.json();
        console.log(userData);
      } catch (error) {
        console.log("Error fetching user data: ", error);
      }
    };

    getUserData();
  }, [userId]);
  return (
    <div>
      <div className="space-y-4">
        <h2 className=" font-playfair">Hello {userId}</h2>
        <p className="uppercase">Welcome to your account</p>
      </div>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
