import { account } from "@/lib/appwrite/appwrite";
import { ID } from "appwrite";
import { createUserInfo } from "./user.action";

export const createUser = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) => {
  try {
    const user = await account.create(ID.unique(), email, password, name);

    await createUserInfo({ email, name, userId: user.$id });
    console.log("User created successfully", user);
  } catch (error: any) {
    console.log(`Failed to create user: ${error.message}`);
  }
};

export const currentUser = async () => {
  try {
    const user = (await account.get()).$id;
    return user;
  } catch (error: any) {
    console.log(`Failed to fetch user account: ${error.message}`);
  }
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await account.createEmailPasswordSession(email, password);
    console.log("user logged in successfully");
  } catch (error: any) {
    console.log(`Error logging in user: ${error.message}`);
  }
};

export const logout = async () => {
  try {
    await account.deleteSessions();
    console.log("User Sign-Out Successful");
  } catch (error: any) {
    console.log(`Failed to Sign-out user`);
  }
};
