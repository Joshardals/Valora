"use server";
import { databases, storage } from "@/lib/appwrite/appwrite.config";
import { getCurrentUser } from "@/lib/actions/auth/auth.action";
import { ID, Query } from "node-appwrite";
import { revalidatePath } from "next/cache";

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

    revalidatePath("/admin");
    revalidatePath("/admin/products");
    return { success: true };
  } catch (error: any) {
    console.log(`Error Creating Products: ${error.message}`);
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

// Get the product image url from the storage bucket appwrite.
export const getProductImage = async (fileId: string) => {
  try {
    const url = `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${NEXT_PUBLIC_APPWRITE_PROJECT}&mode=admin`;

    return { success: true, url };
  } catch (error: any) {
    console.log(`Error fetching product image`);
    return { success: false, msg: error.message };
  }
};

// Fetch all Products
export const fetchProducts = async () => {
  try {
    const data = await databases.listDocuments(
      DATABASE_ID as string,
      PRODUCTS_ID as string,
      []
    );

    return { success: true, products: data.documents };
  } catch (error: any) {
    console.log(`Failed to fetch products: ${error.message}`);
    return { success: false, msg: error.message };
  }
};
