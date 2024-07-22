"use server";

import { databases } from "@/lib/appwrite/appwrite.config";
import { ID, Query } from "node-appwrite";

interface UserInfoParams {
  email: string;
  name: string;
  userId: string;
}

export const createUserInfo = async ({
  email,
  name,
  userId,
}: UserInfoParams) => {
  try {
    await databases.createDocument(
      process.env.DATABASE_ID as string,
      process.env.USERS_ID as string,
      ID.unique(),
      {
        email,
        name,
        userId,
      }
    );

    console.log(`User document successfully created in the db`);
  } catch (error: any) {
    console.log(`Failed to create user document in the db: ${error.message}`);
  }
};

export const fetchUserInfo = async (userId: string) => {
  try {
    const response = await databases.listDocuments(
      process.env.DATABASE_ID as string,
      process.env.USERS_ID as string,
      [Query.equal("userId", userId)]
    );

    console.log("User information", response.documents[0]);
    return response.documents[0];
  } catch (error: any) {
    console.log(`Failed to fetch user info. ${error.message}`);
  }
};
