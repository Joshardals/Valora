import axios from "axios";
import { RegisterProps } from "@/typings/action";
import { unstable_noStore as noStore } from "next/cache";

export async function registerUser({
  firstName,
  lastName,
  email,
  password,
}: RegisterProps) {
  try {
    noStore();

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
