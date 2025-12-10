import { useEffect, useState } from "react";
import { account } from "./appwriteConfig";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const userData = await account.get();
      setUser(userData);
    } catch (error) {
      navigate("/login"); // if not logged in
    }
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    navigate("/login");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="text-white h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-2xl">
        {user ? `Welcome, ${user.name} 👋` : "Loading..."}
      </h1>

      <button
        onClick={logoutUser}
        className="bg-red-500 mt-4 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
