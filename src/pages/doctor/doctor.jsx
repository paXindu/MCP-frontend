import React, { useState, useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';


function Doctor() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const employeeNicFromQuery = queryParams.get('employeeNic') || '';
  const [employeeNic, setEmployeeNic] = useState(employeeNicFromQuery);
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState(null);
  const [appointmentId, setAppointmentId] = useState('');
  const [disease, setDisease] = useState('');
  const [selectedDrug, setSelectedDrug] = useState('');
  const [labTest, setLabTest] = useState(''); 
  const [viewDataClicked, setViewDataClicked] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);
  const [recommendationId, setRecommendationId] = useState(null);

 

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/Employee/searchEmployee/${employeeNicFromQuery}`);
        if (response.ok) {
          const data = await response.json();
          setEmployeeData(data);
          setError(null);
        } else {
          const errorMessage = await response.text();
          setError(`Error: ${errorMessage}`);
          setEmployeeData(null);
        }
      } catch (error) {
        console.error('Error fetching employee data:', error);
        setError('Error fetching employee data');
        setEmployeeData(null);
      }
    };

    if (employeeNic) {
      fetchEmployeeDetails();
    }
  }, [employeeNic]);

  const fetchAppointmentData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/Appointment/appointmentData/${appointmentId}`);
      if (response.ok) {
        const data = await response.json();
        setAppointmentData(data);
      } else {
        const errorMessage = await response.text();
        console.error(`Error fetching appointment data: ${errorMessage}`);
        setAppointmentData(null);
      }
    } catch (error) {
      console.error('Error fetching appointment data:', error);
      setAppointmentData(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/Recommendation/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          appointmentId,
          Drugs: selectedDrug,
          recommendationDetails: disease,
          labTest, 
        }),
      });

      if (response.ok) {
        const recommendationId = await response.text();
        setRecommendationId(recommendationId);
        setViewDataClicked(true);
      } else {
        const errorMessage = await response.text();
        console.error(`Error submitting recommendation: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error submitting recommendation:', error);
    }
  };

  return (
    <div className="bg-white-500 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-red-500 mb-4">{`Doctor - ${employeeData ? employeeData.employeeName : ""}`}</h1>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Enter appointment Information</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-red-200 p-4 rounded-md mt-2"
          >
            <div className="mb-4">
              <label
                htmlFor="appointmentId"
                className="block text-sm font-medium text-gray-700"
              >
                appointment ID
              </label>
              <input
                type="text"
                id="appointmentId"
                value={appointmentId}
                onChange={(e) => setAppointmentId(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="disease"
                className="block text-sm font-medium text-gray-700"
              >
                Disease & Recommondations 
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
                Enter Drug
              </label>
              <input
                type="text"
                id="drug"
                value={selectedDrug}
                onChange={(e) => setSelectedDrug(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
                placeholder="Type the drug name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="labTest"
                className="block text-sm font-medium text-gray-700"
              >
                Lab Test
              </label>
              <input
                type="text"
                id="labTest"
                value={labTest}
                onChange={(e) => setLabTest(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
                placeholder="Type the lab test name"
                required
              />
            </div>
            
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setViewDataClicked(true);
                fetchAppointmentData();
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              View Patient and Appointment Data
            </button>
          </form>
          {viewDataClicked && appointmentData && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Appointment Data</h2>
              <div>
                <p>
                  <strong>Appointment ID:</strong> {appointmentData.appointmentId}
                </p>
                <p>
                  <strong>Patient Name:</strong> {appointmentData.patient.patientName}
                </p>
                <p>
                  <strong>Doctor Name:</strong> {appointmentData.employee.employeeName}
                </p>
              </div>
            </div>
          )}
          {viewDataClicked && recommendationId && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Recommendation ID</h2>
              <p>{recommendationId}</p>
            </div>
          )}
        </div>
        <Link to="http://localhost:8501">
              <button className="bg-blue-500 text-white p-2 rounded-md mt-4">
              Heart disease prediction
              </button>
            </Link>
      </div>
    </div>
  );
}

export default Doctor;
