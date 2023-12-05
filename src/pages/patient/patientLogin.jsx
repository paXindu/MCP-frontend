import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function PatientLogin() {

  
  
  const navigate = useNavigate();
  const [nic, setNicP] = useState("");
  const [password, setPassword] = useState("");
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    const formData = new URLSearchParams();
    formData.append("patientNic", nic);
    formData.append("patientPassword", password);

    try {
      const response = await fetch("http://localhost:8080/Patient/loginPatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (response.ok) {
        
       
        
        
        
      
        navigate(`/loggedin/patient?nic=${nic}`);
        
      } else {
        const responseBody = await response.text(); 
    alert(responseBody);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <div className="flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          <b>Patient Login</b>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nic" className="block text-sm font-medium text-gray-700">
              NIC
            </label>
            <input
              type="text"
              id="nic"
              name="nic"
              value={nic}
              onChange={(e) => setNicP(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  </div>
    
    
    
  );
}

export default PatientLogin;
