import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/books");
    };

    return (
        <div className="flex justify-between">
            <div className="my-container">
                <p className="bg-yellow-400 inline px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    ON SALE!
                </p>
                <h1 className="text-4xl font-bold text-gray-900 my-4">
                    A reader lives a <br /> thousand lives{" "}
                    <span className="text-blue-400">before he dies</span>
                </h1>
                <p>
                    Books are a uniquely portable magic. Books serve to show a
                    man that those original thoughts of his aren’t very new
                    after all. The man who does not read good books is no better
                    than the man who can’t.
                </p>
                <div className="flex items-center gap-3">
                    <button onClick={handleNavigate} className="bg-blue-400 hover:bg-blue-700 text-white px-6 py-3 rounded flex justify-center items-center font-semibold mt-4 gap-3">
                        Visit Store
                        <ShoppingCartIcon className="h-5 w-5 text-white" />
                    </button>
                    <Link
                        className="mt-3 font-semibold text-gray-900 hover:text-blue-700"
                        to="/about"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Home;
