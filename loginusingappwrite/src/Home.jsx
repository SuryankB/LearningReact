import { useEffect, useState } from "react";
import { account } from "./appwriteConfig";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Fetch logged-in user
  const getUser = async () => {
    try {
      const userData = await account.get();
      setUser(userData);
    } catch (err) {
      setUser(null);
    }
  };

  // Logout
  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="text-white h-screen bg-gray-900 flex flex-col">

      <header className="flex justify-end p-4 space-x-3">
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
            >
              Signup
            </button>
          </>
        )}
      </header>

      <div className="flex flex-col flex-grow items-center justify-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to Home Page </h1>

        {!user ? (
          <p className="text-gray-300">Please Login or Signup to continue</p>
        ) : (
          <p className="text-gray-300">Logged in as {user.name}</p>
        )}
      </div>
    </div>
  );
}
