import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Log } from '../../Context/Login.jsx';
import { ThemeContext } from "../../Context/ThemeContext.jsx";

function Header() {
  const { user, logout } = useContext(Log);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-gray-800 text-white  p-4 flex justify-between items-center transition-all duration-300">

      <h1 className="text-2xl font-bold">SelfLearn</h1>

      <div className="flex items-center gap-4">

        {user && (
          <span>Welcome, {user.username}!</span>
        )}

        {!user ? (
          <Link
            to="/Login"
            className="bg-white text-gray-600 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 font-medium rounded-lg text-sm px-4 py-2 transition"
          >
            Log in
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Logout
          </button>
        )}

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>

      </div>
    </header>
  );
}

export default Header;
