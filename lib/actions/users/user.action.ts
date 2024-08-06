"use server";
import { databases } from "@/lib/appwrite/appwrite.config";
import { getCurrentUser } from "../auth/auth.action";
import { ID, Query } from "node-appwrite";

interface UserInfoParams {
  email: string;
  name: string;
  userId: string;
}

const { DATABASE_ID, USERS_ID } = process.env;

export const createUserInfo = async (data: UserInfoParams) => {
  try {
    await databases.createDocument(
      DATABASE_ID as string,
      USERS_ID as string,
      ID.unique(),
      {
        email: data.email,
        name: data.name,
        userId: data.userId,
        role: "user",
      }
    );

    console.log("User created successfully in the database");
    return { success: true };
  } catch (error: any) {
    console.log(`Failed to create user document in the db: ${error.message}`);
    return { success: false, msg: error.message };
  }
};

// Fetch Current User Info
export const fetchUserInfo = async () => {
  try {
    const user = await getCurrentUser();
    const { $id: userId } = user;
    const data = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      [Query.equal("userId", userId)]
    );

    return { success: true, userInfo: data.documents[0] };
  } catch (error: any) {
    console.log(`Failed to fetch user info. ${error.message}`);
    return { success: false, msg: error.message };
  }
};

// Fetch Current User Role
export const fetchUserRole = async () => {
  try {
    const user = await fetchUserInfo();
    const role = user?.userInfo?.role; // Checking for the current User Role

    if (role === "admin") {
      return { success: true, admin: true };
    }

    return { success: false };
  } catch (error: any) {
    console.log(`Failed to fetch user role: ${error.message}`);
    return { success: false, msg: error.message };
  }
};
