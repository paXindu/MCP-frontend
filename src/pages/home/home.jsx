import React from "react";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?w=1060&t=st=1692015456~exp=1692016056~hmac=e99d1a8c2b63074dc2eab02b02499afdfa0fa19ba6e01526b301513c543ba714)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={backgroundStyle}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96 h-96 text-center">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to Comprehensive Patient Management System
        </h1>
        <p className="text-gray-600 mb-6">Health is the greatest happiness.</p>
        <div className="flex flex-col space-y-3">
          <a
            href="/patientlogin"
            className="w-full  py-2 px-4 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Patient Login
          </a>
          <a
            href="/patientregistration"
            className="w-full  py-2 px-4 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Patient Self Registration
          </a>
          <a
            href="/employeeregistration"
            className="w-full py-2 px-4 border rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Intranet Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
