"use server";
import { databases } from "@/lib/appwrite/appwrite.config";
import { Query } from "node-appwrite";

const { DATABASE_ID, USERS_ID, PRODUCTS_ID } = process.env;

// Fetch Total Users
export const fetchTotalUsers = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      []
    );

    console.log(data.total);
    return data.total;
  } catch (error: any) {
    console.log(`Failed to fetch total users. ${error.message}`);
    return { success: false, msg: error.message };
  }
};

// Fetch Total Products
export const fetchTotalProducts = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID as string,
      PRODUCTS_ID as string,
      []
    );

    console.log(data.total);
    return data.total;
  } catch (error: any) {
    console.log(`Failed to fetch total products. ${error.message}`);
    return { success: false, msg: error.message };
  }
};

// Fetch Recent Signups
export const fetchRecentSignups = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      [Query.orderDesc(""), Query.limit(5)]
    );

    return { success: true, recentSignups: data.documents, total: data.total };
  } catch (error: any) {
    console.log(`Failed to fetch Recent Signups. ${error.message}`);
    return { success: false, msg: error.message };
  }
};
