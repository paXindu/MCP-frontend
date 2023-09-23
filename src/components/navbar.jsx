import React from "react";
import { Link } from "react-router-dom"; // Make sure you have React Router installed

const NavBar = () => {
  return (
    <nav className="bg-red-500 text-white p-4 flex gap-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CPMS</h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          {/* Add more tabs as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
