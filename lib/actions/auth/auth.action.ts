import axios from "axios";
import { LoginProps, RegisterProps } from "@/typings/action";
import { unstable_noStore as noStore } from "next/cache";

// Function to register a user
export async function registerUser({
  firstName,
  lastName,
  email,
  password,
}: RegisterProps) {
  try {
    noStore();

    // Make a POST request to register the user
    await axios.post("http://localhost:5000/api/v1/register", {
      firstName,
      lastName,
      email,
      password,
    });

    console.log("Registration Successful!");
  } catch (error: any) {
    console.log(`Registration Failed: ${error.message}`);
  }
}

// Function to log in a user
export async function loginUser({ email, password }: LoginProps) {
  try {
    // Make a POST request to login the userjj
    const response = await axios.post("http://localhost:5000/api/v1/login", {
      email,
      password,
    });

    // Extract the token from the response
    const token = response.data.token;

    // Store the token securely (e.g., in local storage)
    localStorage.setItem("token", token);
    localStorage.setItem("userEmail", email);

    console.log("Login Successful!", token);
  } catch (error: any) {
    console.log(`Login Failed: ${error.message}`);
  }
}

// Function to log out the user
export async function logoutUser() {
  try {
    // Remove token from local storage
    localStorage.removeItem("token");

    console.log("Logout Successful");
  } catch (error: any) {
    console.log(`Logout Failed ${error.message}`);
  }
}

// Function to fetch User data
export async function fetchUserData(email: string) {
  try {
    // Get token from local storage
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/v1/user?email=${email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.json();
  } catch (error: any) {
    console.log(`Error fetching User Data: ${error.message}`);
  }
}
