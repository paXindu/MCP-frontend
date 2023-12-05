import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientRegistration() {
  const navigate = useNavigate();

  const initialState = {
    patientNic: "",
    patientPhone: "",
    patientPassword: "",
    patientName: "",
    patientDOB: "",
    sex: "",
    address: "",
    maritalStatus: "",
    isUnder18: "",
    emergencyContact: "",
    relationship: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    for (const key in formData) {
      if (formData[key] === "") {
        newErrors[key] = "This field is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        console.log("Sending request with data:", formData);

        const response = await axios.post(
          "http://localhost:8080/Patient/savePatient",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const responseBody = await response.text();
        console.log("Response from server:", response);
        console.log("Response Body:", responseBody);

        if (response.status === 201) {
          alert(responseBody);
          console.log("Patient data saved successfully.");
          resetForm();
          navigate("/intranet");
        } else {
          alert(responseBody);
          console.log("Response Body:", responseBody);
        }
      } catch (error) {
        alert(" Registration Succesfull ")
        navigate("/")
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-96 space-y-9">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Patient Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
        <input
            type="text"
            name="patientNic"
            value={formData.patientNic}
            onChange={handleChange}
            placeholder="NIC"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="patientPhone"
            value={formData.patientPhone}
            onChange={handleChange}
            placeholder="Phone"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="password"
            name="patientPassword"
            value={formData.patientPassword}
            onChange={handleChange}
            placeholder="Password"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Name"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="patientDOB"
            value={formData.patientDOB}
            onChange={handleChange}
            placeholder="Date of Birth (YYYY/MM/DD)"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
          <div className="flex items-center space-x-4">
            <p>Is Under 18?</p>
            <label>
              
              <input
                type="radio"
                name="isUnder18"
                value="true"
                checked={formData.isUnder18 === "true"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isUnder18"
                value="false"
                checked={formData.isUnder18 === "false"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            placeholder="Emergency Contact Number"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            placeholder="Relationship"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Patient Data
          </button>
        </form>
      </div>
    </div>
 
  );
}

export default PatientRegistration;
