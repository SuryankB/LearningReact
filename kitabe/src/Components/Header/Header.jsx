import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search } from "lucide-react";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="flex justify-center mt-6">
      <div
        className="
          bg-red-300
          text-black
          px-10
          py-4
          rounded-full
          shadow-lg
          border
          border-black/10
          flex
          items-center
          gap-8
          font-jakarta
          text-lg
          transition-all
          duration-300
        "
      >
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold" : "hover:text-gray-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/myfav"
            className={({ isActive }) =>
              isActive ? "font-semibold" : "hover:text-gray-600"
            }
          >
            MyFav
          </NavLink>

          <div className="flex items-center gap-2">
            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${searchOpen ? "w-44" : "w-0"}
              `}
            >
              <input
                type="text"
                placeholder="Search books..."
                className="
                  w-full
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-black/20
                  outline-none
                  text-sm
                  bg-white/70
                "
              />
            </div>

            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              className="hover:text-gray-600 transition"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        <Link
          to="/profile"
          className="
            px-4
            py-1.5
            rounded-full
            border
            border-black/20
            hover:bg-black
            hover:text-white
            transition
          "
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Header;
