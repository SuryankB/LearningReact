import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  console.log("Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);
  console.log("Endpoint:", import.meta.env.VITE_APPWRITE_ENDPOINT);


export const account = new Account(client);
