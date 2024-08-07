"use server";
import { databases, storage } from "@/lib/appwrite/appwrite.config";
import { getCurrentUser } from "@/lib/actions/auth/auth.action";
import { ID, Query } from "node-appwrite";

const {
  DATABASE_ID,
  USERS_ID,
  PRODUCTS_ID,
  BUCKET_ID,
  NEXT_PUBLIC_APPWRITE_PROJECT,
} = process.env;

interface ProductsParams {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

// Create Products
export const createProducts = async (data: ProductsParams) => {
  try {
    const user = await getCurrentUser();
    const { $id: userId } = user;

    await databases.createDocument(
      DATABASE_ID as string,
      PRODUCTS_ID as string,
      ID.unique(),
      {
        name: data.name,
        price: data.price,
        description: data.description,
        image: data.image,
        userId,
      }
    );
    console.log("Products created in the document.");
    return { success: true };
  } catch (error: any) {
    console.log(`Error Creating Products: ${error.message}`);
    return { success: false, msg: error.message };
  }
};

// Fetch Total Users
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
    console.log(`Failed to fetch user info. ${error.message}`);
    return { success: false, msg: error.message };
  }
};

// Upload product image to the PRODUCTS Storage Bucket Appwrite
export const uploadProductImage = async (formData: FormData) => {
  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file found in FormData");

    const result = await storage.createFile(
      BUCKET_ID as string,
      ID.unique(),
      file
    );

    return { success: true, fileId: result.$id };
  } catch (error: any) {
    console.log(`Error Uploading Product Image: ${error.message}`);
    return { success: false, msg: error.message };
  }
};

export const getProductImage = async (fileId: string) => {
  try {
    const url = `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${NEXT_PUBLIC_APPWRITE_PROJECT}&mode=admin`;

    console.log(url);
    return { success: true, url };
  } catch (error: any) {
    console.log(`Error fetching product image`);
    return { success: false, msg: error.message };
  }
};
