import { unstable_noStore as noStore } from "next/cache";

export async function getData() {
  try {
    noStore();
    const res = await fetch("http://localhost:5000/api/v1/users");
    const resData = await res.json();

    return resData;
  } catch (error: any) {
    console.log(`Error fetching posts: ${error.message}`);
  }
}
