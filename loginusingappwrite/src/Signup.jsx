import { useState } from "react";
import { account } from "./appwriteConfig";
import { Client, Databases } from "appwrite";
import { useNavigate } from "react-router-dom";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const db = new Databases(client);

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      // Create user auth
      await account.create("unique()", email, password, name);

      // Auto login after signup
      await account.createEmailPasswordSession({
        email,
        password,
      });

      // Save profile in DB
      await db.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        "unique()",
        {
          name: name,
          email: email,
        }
      );

      alert("Signup Successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form
        onSubmit={signupUser}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-80"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>

        <input
          className="w-full mb-3 px-3 py-2 rounded bg-gray-700"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full mb-3 px-3 py-2 rounded bg-gray-700"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 px-3 py-2 rounded bg-gray-700"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded mt-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
