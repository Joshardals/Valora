import * as sdk from "node-appwrite";

const {
  NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  APPWRITE_API_KEY,
  DATABASE_ID,
  USERS_ID,
  NEXT_PUBLIC_APPWRITE_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint(ENDPOINT as string)
  .setProject(NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)
  .setKey(APPWRITE_API_KEY as string);

const databases = new sdk.Databases(client);

export { databases };
