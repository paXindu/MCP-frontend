import React from "react";

function Admin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-72 ">
        Comprehensive Patient Management System Admin
      </h1>
      <div className="flex gap-9">
        <a
          href="/intranet/employeeregistration"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
        >
          Employee Registration and Management
        </a>
        <a
          href="/intranet/patientdata"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
        >
          Patient Data Analyzer
        </a>
      </div>
    </div>
  );
}

export default Admin;
