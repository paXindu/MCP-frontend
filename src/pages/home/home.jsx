import React from "react";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-gray-200">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96 h-auto text-center text-white">
        <h1 className="text-2xl font-semibold mb-4">Welcome to MediCarePlus</h1>
        <p className="text-gray-300 mb-6">Comprehensive Healthcare Management System with Heart Disease Prediction System.</p>
        <div className="flex flex-col space-y-3">
          <a
            href="/patientlogin"
            className="w-full py-2 px-4 border rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            Patient Login
          </a>
          <a
            href="/patientregistration"
            className="w-full py-2 px-4 border rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            Patient Self Registration
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
