import React, { useState } from "react";
import axios from "axios";

function EmployeeRegistration() {
  const [employeeData, setEmployeeData] = useState({
    employeeNic: "",
    employeeName: "",
    employeeRoll: "DOCTOR",
    employeePassword: "", 
    morningAvailability: "", 
    eveningAvailability: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

   const handleSubmit = async (e) => {
  e.preventDefault();

  if (!employeeData.employeePassword) {
    alert("Password is mandatory.");
    return;
  }
  if (employeeData.employeeNic.length !== 13) {
    alert("NIC must be 13 characters.");
    return;
  }

  
  

    try {
      const response = await axios.post(
        "http://localhost:8080/Employee/saveEmployee",
        employeeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 202 || response.status === 200 || response.status === 201) {
        alert("Employee data saved successfully.");
      } else {
        alert("Failed to save employee data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderAdditionalInputs = () => {
    if (employeeData.employeeRoll === "DOCTOR") {
      return (
        <>
          <input
            type="text"
            name="morningAvailability"
            value={employeeData.morningAvailability}
            onChange={handleChange}
            placeholder="Morning Availability"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="eveningAvailability"
            value={employeeData.eveningAvailability}
            onChange={handleChange}
            placeholder="Evening Availability"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </>
      );
    }

    return null;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-96 space-y-9">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Employee Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="employeeNic"
            value={employeeData.employeeNic}
            onChange={handleChange}
            placeholder="NIC"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="employeeName"
            value={employeeData.employeeName}
            onChange={handleChange}
            placeholder="Name"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <select
            name="employeeRoll"
            value={employeeData.employeeRoll}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="DOCTOR">Doctor</option>
            <option value="RECEPTIONIST">Receptionist</option>
            <option value="ADMIN">Admin</option>
            <option value="PHARMACIST">Pharmacist</option>
            <option value="LAB_TECHNICIAN">Lab Technician</option>
          </select>
          <input
            type="password"
            name="employeePassword"
            value={employeeData.employeePassword}
            onChange={handleChange}
            placeholder="Password"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {renderAdditionalInputs()}
          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-md text-white bg-red-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Employee Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeRegistration;
