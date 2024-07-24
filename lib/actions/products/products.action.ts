"use server";

import { databases } from "@/lib/appwrite/appwrite.config";
import { fetchUserRole } from "../users/user.action";
import { ID, Query } from "node-appwrite";

// Admin Only

export const addProducts = async (currentUser: string) => {
  try {
    const userRole = await fetchUserRole(currentUser);

    if (userRole !== "admin") {
      throw new Error("Acess denied, Admins only");
    }

    await databases.createDocument(
      process.env.DATABASE_ID as string,
      process.env.PRODUCTS_ID as string,
      ID.unique(),
      {}
    );
    return userRole;
  } catch (error: any) {
    console.log(`Failed to add product: ${error.message}`);
  }
};
