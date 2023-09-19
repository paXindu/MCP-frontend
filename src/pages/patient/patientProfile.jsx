import React, { useState } from "react";
import axios from "axios";

function PatientProfile() {
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatientData] = useState({
    patientNic: "",
    patientPhone: "",
    patientName: "",
    patientDOB: "",
    sex: "",
    address: "",
    maritalStatus: "",
    isUnder18: "",
    emergencyContact: "",
    relationship: "",
  });

  const handleFetchData = () => {
    axios
      .get(`http://localhost:8080/Patient/searchPatient/${patientId}`)
      .then((response) => {
        const fetchedData = response.data; // Assuming the response contains patient data
        console.log("Fetched data:", fetchedData); // Debug logging
        setPatientData(fetchedData);
        console.log("Updated patientData state:", patientData); // Debug logging
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
      });
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Patient Profile</h2>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          onClick={handleFetchData}
          className="w-full py-2 px-4 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Fetch Patient Data
        </button>
        <div>
          <strong>NIC:</strong> {patientData.patientNic}
        </div>

        <p>
          <strong>Phone:</strong> {patientData.patientPhone}
        </p>
        <p>
          <strong>Name:</strong> {patientData.patientName}
        </p>
        <p>
          <strong>Date of Birth:</strong> {patientData.patientDOB}
        </p>
        <p>
          <strong>Sex:</strong> {patientData.sex}
        </p>
        <p>
          <strong>Address:</strong> {patientData.address}
        </p>
        <p>
          <strong>Marital Status:</strong> {patientData.maritalStatus}
        </p>
        <p>
          <strong>Under 18:</strong> {patientData.isUnder18}
        </p>
        <p>
          <strong>Emergency Contact:</strong> {patientData.emergencyContact}
        </p>
        <p>
          <strong>Relationship:</strong> {patientData.relationship}
        </p>
      </div>
    </div>
  );
}

export default PatientProfile;
