import React, { useState, useContext } from "react";
import axios from "axios";

function DoctorsList() {
  const backgroundStyle = {
    backgroundImage: `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=740&t=st=1701702530~exp=1701703130~hmac=bcd7fa1c454f105ba179c1d74d3e56919b56cdd47ed9efa506d29c85c0d53ce6)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [patientNic, setpatientNic] = useState(""); // Step 1: Add patientNic state

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/Employee/getAllEmployee"
      );

      if (response.status === 200) {
        const filteredDoctors = response.data.filter(
          (doctor) => doctor.employeeRoll === "DOCTOR"
        );
        setDoctors(filteredDoctors);
        console.log("Fetched Doctors:", filteredDoctors);
      } else {
        console.error("Error fetching doctors. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  const bookAppointment = async (employeeNic, formData) => {
    try {
      setLoading(true);
      const response = await axios.put(
        "http://localhost:8080/Appointment/newAppointment",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          params: {
            patientNic, // Step 3: Include patientNic in the params
            employeeNic,
          },
        }
      );
      alert("Appointment booked successfully:", response.data);
    } catch (error) {
      console.error("Error booking appointment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col  justify-center min-h-screen"
      style={backgroundStyle}
    >
    <div className="container mx-auto p-6">
      <h2 className="text-2xl mb-5 "><b>Available Doctors</b></h2>
     
      <input
        type="text"
        placeholder="Enter your NIC"
        value={patientNic}
        onChange={(e) => setpatientNic(e.target.value)}
        className="mb-8 p-2"
      />
      <br></br>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={fetchDoctors}
        disabled={loading}
      >
        {loading ? "Loading..." : "View Doctors"}
      </button>
      <div className="mt-4">
        {doctors.map((doctor) => (
          <div key={doctor.employeeNic} className="bg-gray-100 p-4 rounded my-2">
            <p>
              <strong>NIC:</strong> {doctor.employeeNic}
            </p>
            <p>
              <strong>Name:</strong> {doctor.employeeName}
            </p>
            <p>
              <strong>Role:</strong> {doctor.employeeRoll}
            </p>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={() => bookAppointment(doctor.employeeNic)}
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default DoctorsList;
