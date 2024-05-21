import { fetchUserData } from "@/lib/actions/auth/auth.action";
import { useUserId } from "@/lib/store/store";
import { useEffect } from "react";

export default function UserAccount() {
  const { userId } = useUserId();
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
    </div>
  );
}
