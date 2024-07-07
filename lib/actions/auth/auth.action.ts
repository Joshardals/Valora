// "use server";

// import {
//   collection,
//   addDoc,
//   getFirestore,
//   getDoc,
//   doc,
// } from "firebase/firestore";
// import { getApp } from "@/lib/firebase/firebase";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { LoginProps, RegisterProps } from "@/typings/action";
// import { redirect } from "next/navigation";

// //Function to register user

// export async function registerUser({
//   firstName,
//   lastName,
//   email,
//   password,
// }: RegisterProps) {
//   try {
//     const app: any = await getApp();
//     const auth = await getAuth(app);
//     const db = await getFirestore(app);

//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     const user = userCredential.user;
//     console.log("User Registration Successful");

//     // Create a new user document in Firestore
//     const userRef = collection(db, "users");

//     // Todo: Later in future, I would need to sanitize the user inputs before storing it in the database.
//     await addDoc(userRef, {
//       uid: user.uid, // For unique identifcation.
//       firstName,
//       lastName,
//       email,
//       // Other relevant fields will be added later on.
//     });
//   } catch (error: any) {
//     console.error(`Error Creating User: ${error.message}`);
//   }

//   redirect("/");
// }

// // function to login User

// export async function loginUser({ email, password }: LoginProps) {
//   try {
//     const app: any = await getApp();
//     const auth = await getAuth(app);

//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     const user = userCredential.user;
//     console.log("User Logged In Successfully");
//   } catch (error: any) {
//     console.error(`Error Logging In: ${error.message}`);
//   }

//   redirect("/account");
// }

// // function to logout user

// export async function logoutUser() {
//   try {
//     const app: any = await getApp();
//     const auth = await getAuth(app);

//     await signOut(auth);
//     console.log("User Sign-out Successful");
//   } catch (error: any) {
//     console.error(`Error Logging Out; ${error.message}`);
//   }

//   redirect("/");
// }

// export async function getUser() {
//   try {
//     const app: any = await getApp();
//     // const auth = await getAuth(app);
//     const db = await getFirestore(app);

//     const userDocRef = doc(db, "users", "hZGUvawLOJgj404rTylEx4i4E4n2");
//     const userDocSnap = await getDoc(userDocRef);

//     if (userDocSnap.exists()) {
//       console.log(userDocSnap.data());
//     } else {
//       console.log("no-data yet.");
//     }
//   } catch (error: any) {
//     console.error(`Error Fetching User; ${error.message}`);
//   }

//   redirect("/");
// }
