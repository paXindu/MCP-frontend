import React, { useState } from "react";
import axios from "axios";

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/Employee/getAllEmployee"
      );
      if (response.status === 202) {
        const filteredDoctors = response.data.filter(
          (doctor) => doctor.employeeRoll === "DOCTOR"
        );
        setDoctors(filteredDoctors);
        console.log("Fetched Doctors:", filteredDoctors);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl mb-4">Available Doctors</h2>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={fetchDoctors}
        disabled={loading}
      >
        {loading ? "Loading..." : "View Doctors"}
      </button>
      <div className="mt-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.employeeNic}
            className="bg-gray-100 p-4 rounded my-2"
          >
            <p>
              <strong>NIC:</strong> {doctor.employeeNic}
            </p>
            <p>
              <strong>Name:</strong> {doctor.employeeName}
            </p>
            <p>
              <strong>Role:</strong> {doctor.employeeRoll}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;
