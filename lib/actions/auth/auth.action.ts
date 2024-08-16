"use server";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import {
  createAdminClient,
  createSessionClient,
} from "@/lib/appwrite/appwrite.config";
import { AuthProps } from "@/typings/action";
import { redirect } from "next/navigation";
import { createUserInfo } from "../users/user.action";

export async function getCurrentUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error: any) {
    return error.message;
  }
}

export async function signInUser(data: AuthProps) {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(
      data.email!,
      data.password!
    );

    cookies().set("userSession", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // If Successful
    return { success: true };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

// Creating A User
export async function signUpUser(data: AuthProps) {
  try {
    const { account } = await createAdminClient();
    const response = await account.create(
      ID.unique(),
      data.email!,
      data.password!,
      `${data.firstName! + " " + data.lastName!}`
    );
    const session = await account.createEmailPasswordSession(
      data.email!,
      data.password!
    );

    const { $id: userId } = response;
    cookies().set("userSession", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // Creating a User collection in the database.
    await createUserInfo({
      email: data.email!,
      name: `${data.firstName} ${data.lastName}`,
      userId,
    });

    // If Successful
    return { success: true };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

// Sign Out User
export async function signOutUser() {
  try {
    const { account } = await createSessionClient();

    cookies().delete("userSession");
    await account.deleteSession("current");
  } catch (error: any) {
    return error.message;
  }

  redirect("/");
}
