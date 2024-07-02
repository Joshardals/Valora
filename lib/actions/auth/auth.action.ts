"use server";

import { getApp } from "@/lib/firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { LoginProps, RegisterProps } from "@/typings/action";

//Function to register a user

export async function registerUser({
  firstName,
  lastName,
  email,
  password,
}: RegisterProps) {
  try {
    const app: any = await getApp();
    const auth = await getAuth(app);

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log("User Registration Successful");
  } catch (error: any) {
    console.log(`Error creating User ${error.message}`);
  }
}

export async function loginUser({ email, password }: LoginProps) {
  try {
    const app: any = await getApp();
    const auth = await getAuth(app);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    console.log("Signed In Successfully", user);
  } catch (error: any) {
    console.log(`Error Logging In ${error.message}`);
  }
}

// // Function to register a user
// export async function registerUser({
//   firstName,
//   lastName,
//   email,
//   password,
// }: RegisterProps) {
//   try {
//     noStore();

//     // Make a POST request to register the user
//     await axios.post("http://localhost:5000/api/v1/register", {
//       firstName,
//       lastName,
//       email,
//       password,
//     });

//     console.log("Registration Successful!");
//   } catch (error: any) {
//     console.log(`Registration Failed: ${error.message}`);
//   }
// }

// // Function to log in a user
// export async function loginUser({ email, password }: LoginProps) {
//   try {
//     // Make a POST request to login the user
//     const response = await axios.post("http://localhost:5000/api/v1/login", {
//       email,
//       password,
//     });

//     // Extract the token from the response
//     const token = response.data.token;

//     // Store the token securely (e.g., in local storage)
//     localStorage.setItem("token", token);

//     console.log("Login Successful!", token);
//   } catch (error: any) {
//     console.log(`Login Failed: ${error.message}`);
//   }
// }

// // Function to fetch User data
// export async function fetchUserData(email: string) {
//   try {
//     // Get token from local storage
//     const token = localStorage.getItem("token");

//     const response = await fetch(
//       `http://localhost:5000/api/v1/user?email=${email}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return response.json();
//   } catch (error: any) {
//     console.log(`Error fetching User Data: ${error.message}`);
//   }
// }
