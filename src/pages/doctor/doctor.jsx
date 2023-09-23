import React, { useState } from "react";

function Doctor() {
  // State variables for patient information
  const [patientId, setPatientId] = useState("");
  const [disease, setDisease] = useState("");
  const [selectedDrug, setSelectedDrug] = useState("");

  // List of available drugs
  const drugOptions = ["Drug A", "Drug B", "Drug C", "Drug D"];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the submitted data, e.g., send it to a server
    console.log("Patient ID:", patientId);
    console.log("Disease:", disease);
    console.log("Selected Drug:", selectedDrug);
  };

  return (
    <div className="bg-white-500 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-red-500 mb-4">Doctor</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Enter Patient Information</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-red-200 p-4 rounded-md mt-2"
          >
            <div className="mb-4">
              <label
                htmlFor="patientId"
                className="block text-sm font-medium text-gray-700"
              >
                Patient ID
              </label>
              <input
                type="text"
                id="patientId"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="disease"
                className="block text-sm font-medium text-gray-700"
              >
                Disease
              </label>
              <input
                type="text"
                id="disease"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="drug"
                className="block text-sm font-medium text-gray-700"
              >
                Select Drug
              </label>
              <select
                id="drug"
                value={selectedDrug}
                onChange={(e) => setSelectedDrug(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
                required
              >
                <option value="" disabled>
                  Select a Drug
                </option>
                {drugOptions.map((drug, index) => (
                  <option key={index} value={drug}>
                    {drug}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
