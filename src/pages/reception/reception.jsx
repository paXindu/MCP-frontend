import React, { useState } from "react";

function Reception() {
  const doctors = ["Doc 1", "Doc 2", "Doc 3", "Doc 4"];

  // State to track the selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // Function to handle doctor selection
  const handleDoctorSelect = (event) => {
    setSelectedDoctor(event.target.value);
  };
  return (
    <div className="bg-white-500 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-red-500 mb-4">
          Receptionist Dashboard
        </h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Assign Patient to Doctor</h2>
          <div className="bg-red-200 p-4 rounded-md mt-2">
            <div className="mb-4">
              <label
                htmlFor="doctor"
                className="block text-sm font-medium text-gray-700"
              >
                Select Doctor
              </label>
              <select
                id="doctor"
                name="doctor"
                value={selectedDoctor}
                onChange={handleDoctorSelect}
                className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              >
                <option value="" disabled>
                  Select a Doctor
                </option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>
            {/* Add more form elements here */}
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
              Assign Patient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reception;
