
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

function PatientProfile() {
  const backgroundStyle = {
    backgroundImage: `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=740&t=st=1701702530~exp=1701703130~hmac=bcd7fa1c454f105ba179c1d74d3e56919b56cdd47ed9efa506d29c85c0d53ce6)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const patientIdFromQuery = queryParams.get('nic') || '';
  const [patientId, setPatientId] = useState(patientIdFromQuery);
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPatientData = async () => {
    
    try {
      const response = await fetch(`http://localhost:8080/Patient/searchPatient/${patientIdFromQuery}`);
      if (response.ok) {
        const data = await response.json();
        setPatientData(data);
        setError(null);
      } else {
        const errorMessage = await response.text();
        setError(`Error: ${errorMessage}`);
        setPatientData(null);
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
      setError('Error fetching patient data');
      setPatientData(null);
    }
  };

  useEffect(() => {
    fetchPatientData();
  }, [patientIdFromQuery]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={backgroundStyle}
    >
    <div className=" m-4 p-4 border border-gray-300 rounded-md bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">Patient Details</h2>
      <label className="block mb-2">
        <span className="text-gray-700">Patient ID:</span>
        <p className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500">
          {patientId}
        </p>
      </label>
      {patientData && (
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <h3 className="text-xl font-semibold mb-4">{patientData.patientName}'s Details</h3>
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>NIC:</strong> {patientData.patientNic}</p>
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>Phone:</strong> {patientData.patientPhone}</p>
          
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>Date of Birth:</strong> {patientData.patientDOB}</p>
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>Sex:</strong> {patientData.sex}</p>
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>Address:</strong> {patientData.address}</p>
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>Marital Status:</strong> {patientData.maritalStatus}</p>
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>Is Under 18/:</strong> {patientData.isUnder18}</p>
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>Emergency Contact:</strong> {patientData.emergencyContact}</p>
          <p className="mb-2 bg-gray-50 p-2 rounded-md"><strong>Relationship:</strong> {patientData.relationship}</p>
          {/* Add more fields based on your Patient model */}
          <QRCode value={patientData.patientNic} />
          <Link to="/loggedin/channelingdoctor">
              <button className="bg-blue-500 text-white p-2 rounded-md mt-4">
                Doctor Channeling
              </button>
            </Link>
            <br></br>
            <Link to="/loggedin/myappoint">
              <button className="bg-blue-500 text-white p-2 rounded-md mt-4">
                View My Appointmnets 
              </button>
            </Link>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
    </div>

  );
}

export default PatientProfile;
