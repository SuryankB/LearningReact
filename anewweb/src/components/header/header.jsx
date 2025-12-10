import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Header() {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (user) {
            navigate(`/user/${user.username}`); // redirect to profile page
        } else {
            navigate('/login');
        }
    }

    const handleLogout = () => {
        logout();
        navigate('/'); // redirect home after logout
    }

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                   <div className="flex items-center gap-2 lg:order-2">

                            {!user ? (
                                <Link
                                    to="/login"
                                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                                >
                                    Log in
                                </Link>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm mr-2 transition"
                                >
                                    Logout
                                </button>
                            )}


                            <button onClick={handleProfileClick} className="p-2 rounded-full bg-gray-800 text-white">
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                                    <path
                                        d="M6 18C6.8 15.5 9.2 14 12 14C14.8 14 17.2 15.5 18 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        />
                                </svg>
                            </button>
                            {user && (
                                <span className="text-gray-800 font-medium mr-2">
                                {user.username}
                                </span>
                            )}
                        </div>


                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:order-1">
                        <ul className="flex gap-8 font-medium">
                            <li><NavLink to="/" end className={({isActive}) => isActive ? "text-orange-700" : "text-gray-700"}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({isActive}) => isActive ? "text-orange-700" : "text-gray-700"}>About</NavLink></li>
                            <li><NavLink to="/contact" className={({isActive}) => isActive ? "text-orange-700" : "text-gray-700"}>Contact</NavLink></li>
                            <li><NavLink to="/github" className={({isActive}) => isActive ? "text-orange-700" : "text-gray-700"}>Github</NavLink></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}
