import { BoltIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between h-7 mx-12 my-7">
            <Link className="flex justify-center items-center" to="/">
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <h1 className="text-xl ml-2 font-bold text-gray-800 tracking-wide">
                    nextPage
                </h1>
            </Link>
            <div className="flex gap-7 font-semibold">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : "default"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/books"
                    className={({ isActive }) =>
                        isActive ? "active" : "default"
                    }
                >
                    Books
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "active" : "default"
                    }
                >
                    About us
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
