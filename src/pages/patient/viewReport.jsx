import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

function MyAppoint() {
  const [appointments, setAppointments] = useState([]);
  const [patientNic, setPatientNic] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/Appointment/appointmentsByPatient/${patientNic}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [patientNic]);

  return (
    <div className="mx-auto max-w-lg border p-6 rounded-md mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">My Appointments</h2>
      
      <label className="block mb-2 text-center">
        Patient NIC:
        <input
          type="text"
          value={patientNic}
          onChange={(e) => setPatientNic(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </label>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        onClick={fetchData}
        disabled={!patientNic}
      >
        {appointments.length === 0 ? "No Appointments" : "View Appointments"}
      </button>

      <ul className="mt-4">
        {appointments.map((appointment) => (
          <li key={appointment.appointmentId} className="bg-gray-100 p-4 rounded my-2">
            <h3 className="text-xl font-bold mb-2">Appointment ID: {appointment.appointmentId}</h3>
            
            <div>
              <h4 className="text-lg font-bold mb-1">Patient Information:</h4>
              <p>NIC: {appointment.patient.patientNic}</p>
              <p>Name: {appointment.patient.patientName}</p>
              <p>Phone: {appointment.patient.patientPhone}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mt-2 mb-1">Employee Information:</h4>
              <p>NIC: {appointment.employee.employeeNic}</p>
              <p>Name: {appointment.employee.employeeName}</p>
              <p>Role: {appointment.employee.employeeRoll}</p>
            </div>

           
            <div className="mt-4 text-center">
              <QRCode value={`${appointment.appointmentId}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyAppoint;