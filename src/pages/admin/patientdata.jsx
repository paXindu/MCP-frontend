import React, { useState, useEffect } from 'react';

function Patientdata() {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch('http://localhost:8080/Patient/getAllPatient');
        const data = await response.json();
        setPatientData(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Patient Data</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">NIC</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">DOB</th>
            <th className="py-2 px-4 border-b">Sex</th>
            <th className="py-2 px-4 border-b">Marital Status</th>
            <th className="py-2 px-4 border-b">Under 18</th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{patient.patientNic}</td>
              <td className="py-2 px-4 border-b">{patient.patientName}</td>
              <td className="py-2 px-4 border-b">{patient.patientDOB}</td>
              <td className="py-2 px-4 border-b">{patient.sex}</td>
              <td className="py-2 px-4 border-b">{patient.maritalStatus}</td>
              <td className="py-2 px-4 border-b">{patient.isUnder18}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patientdata;
