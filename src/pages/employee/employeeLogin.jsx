import React from "react";

function EmployeeLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Employee Login
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="doctor">Doctor</option>
              <option value="receptionist">Receptionist</option>
              <option value="admin">Admin</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="lab-technician">Lab Technician</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeLogin;
