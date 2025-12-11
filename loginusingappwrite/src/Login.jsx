import { useState } from "react";
import { account } from "./appwriteConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });

      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form
        onSubmit={loginUser}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-80"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

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
          Login
        </button>
      </form>
    </div>
  );
}
