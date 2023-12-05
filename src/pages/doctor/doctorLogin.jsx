import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';


function DoctorLogin() {
  const navigate = useNavigate();
  const [employeeNic, setEmployeeNic] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate NIC length
    if (employeeNic.length !== 12) {
      setError('Please fill out the fields');
      return;
    }

    const formData = new URLSearchParams();
    formData.append('employeeNic', employeeNic);
    formData.append('employeePassword', employeePassword);

    try {
      const response = await fetch('http://localhost:8080/Employee/loginDoctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (response.ok) {
        alert('Login successful');
        navigate(`/intranet/doctor?employeeNic=${employeeNic}`);
      } else {
        const responseBody = await response.text();
        alert(responseBody);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Doctor Login
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="employeeNic"
              className="block text-sm font-medium text-gray-700"
            >
              NIC
            </label>
            <input
              type="text"
              id="employeeNic"
              name="employeeNic"
              value={employeeNic}
              onChange={(e) => setEmployeeNic(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="employeePassword"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="employeePassword"
              name="employeePassword"
              value={employeePassword}
              onChange={(e) => setEmployeePassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log in
          </button>
          
        </form>
        
      </div>
    </div>
  );
}

export default DoctorLogin;
