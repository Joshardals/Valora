"use server";
import { databases } from "@/lib/appwrite/appwrite.config";
import { ID, Query } from "node-appwrite";

const { DATABASE_ID, USERS_ID } = process.env;

// Fetch Current User Info
export const fetchTotalUsers = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      []
    );
    return data.total;
  } catch (error: any) {
    console.log(`Failed to fetch user info. ${error.message}`);
    return { success: false, msg: error.message };
  }
};

export const fetchRecentSignups = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      [Query.orderDesc(""), Query.limit(5)]
    );

    return { success: true, recentSignups: data.documents, total: data.total };
  } catch (error: any) {
    console.log(`Failed to fetch user info. ${error.message}`);
    return { success: false, msg: error.message };
  }
};
