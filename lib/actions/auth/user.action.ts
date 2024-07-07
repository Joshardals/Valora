// "use server";

// import {
//   collection,
//   addDoc,
//   doc,
//   getFirestore,
//   getDoc,
// } from "firebase/firestore";
// import { getApp } from "@/lib/firebase/firebase";
// import { getAuth } from "firebase/auth";
// import { redirect } from "next/navigation";

// // Get User Information by Currently Logged-In User

// export async function getCurrentUserInformation() {
//   try {
//     const app: any = await getApp();
//     const auth = await getAuth(app);
//     const firestore = await getFirestore(app);

//     /* Todo: To make this work, I think I will have to create an hook that checks for 
//     current logged in user. onAuthStateChange type of thing. I'll create it in my hooks folder.  
//     */

//     const user = auth.currentUser; // Get the current logged-in user
//     console.log(user);
//     // if (user) {
//     //   const userDocRef = doc(firestore, "users", user.uid);
//     //   const userDocSnap = await getDoc(userDocRef);

//     //   if (userDocSnap.exists()) {
//     //     const userData = userDocSnap.data();
//     //     console.log(`Current User Data: ${userData.metadata}`);

//     //     return userData.metadata;
//     //   }
//     // }
//     return user;
//   } catch (error: any) {
//     console.error(`Error fetching User Information... ${error.message}`);
//   }
// }
