import React from "react";
import logo from "../assets/Capture.jpg";

function MainMenu() {
  return (
    <div className="flex flex-col bg-blue-700 text-white w-60 h-screen">
      <div className="flex items-center justify-center h-20">
        <img src={logo} alt="Logo" className="h-auto w-auto p-4 mt-24" />
      </div>
      <nav className="flex flex-col mt-36 space-y-2">
        <a
          href="/loggedin/patient"
          className="py-2 px-4 text-gray-300 hover:bg-blue-800"
        >
          My Profile
        </a>
        <a
          href="/channeling"
          className="py-2 px-4 text-gray-300 hover:bg-blue-800"
        >
          Channeling Doctor
        </a>
        <a
          href="/view-reports"
          className="py-2 px-4 text-gray-300 hover:bg-blue-800"
        >
          View Reports
        </a>
        <a
          href="/view-history"
          className="py-2 px-4 text-gray-300 hover:bg-blue-800"
        >
          View History
        </a>
        <a
          href="/bill-payment"
          className="py-2 px-4 text-gray-300 hover:bg-blue-800"
        >
          Bill Payment
        </a>
      </nav>
    </div>
  );
}

export default MainMenu;
