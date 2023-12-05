import React, { useState } from 'react';

const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState({
    patientId:"",
    age: 0,
    sex: 0,
    cp: 1,
    bp: 0,
    chol: 0,
    fbs: 0,
    ekg: 0,
    maxhr: 0,
    exang: 0,
    oldpeak: 0.0,
    slope: 1,
    ca: 0,
    thal: 3,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const apiUrl = 'http://localhost:8080/Lab/saveLabReport';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex mt-1 p-4 w-full max-w-2xl bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50">
        <div className="w-1/2 pr-4">
          <form>
          <label className="block text-sm font-medium text-gray-700">
              Enter PatientID(NIC):
              <input
                type="number"
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
                
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Enter age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min={0}
                max={120}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Select sex:
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              >
                <option value={0}>Female</option>
                <option value={1}>Male</option>
              </select>
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter chest pain type (1-4):
              <input
                type="number"
                name="cp"
                value={formData.cp}
                onChange={handleChange}
                min={1}
                max={4}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter resting blood pressure:
              <input
                type="number"
                name="bp"
                value={formData.bp}
                onChange={handleChange}
                min={0}
                max={300}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter serum cholesterol level:
              <input
                type="number"
                name="chol"
                value={formData.chol}
                onChange={handleChange}
                min={0}
                max={1000}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter FBS over 120:
              <select
                name="fbs"
                value={formData.fbs}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              >
                <option value={0}>False</option>
                <option value={1}>True</option>
              </select>
            </label>
          </form>
        </div>

        <div className="w-1/2 pl-4">
          <form>
            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter EKG results (0-2):
              <input
                type="number"
                name="ekg"
                value={formData.ekg}
                onChange={handleChange}
                min={0}
                max={2}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter maximum heart rate achieved:
              <input
                type="number"
                name="maxhr"
                value={formData.maxhr}
                onChange={handleChange}
                min={0}
                max={300}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter exercise-induced angina:
              <select
                name="exang"
                value={formData.exang}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              >
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </select>
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter ST depression induced by exercise:
              <input
                type="number"
                name="oldpeak"
                value={formData.oldpeak}
                onChange={handleChange}
                min={0.0}
                max={10.0}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter slope of the peak exercise ST segment (1-3):
              <input
                type="number"
                name="slope"
                value={formData.slope}
                onChange={handleChange}
                min={1}
                max={3}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter number of major vessels (0-3) colored by fluoroscopy:
              <input
                type="number"
                name="ca"
                value={formData.ca}
                onChange={handleChange}
                min={0}
                max={3}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              />
            </label>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Enter thallium stress test result:
              <select
                name="thal"
                value={formData.thal}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              >
                <option value={3}>Normal</option>
                <option value={6}>Fixed Defect</option>
                <option value={7}>Reversible Defect</option>
              </select>
            </label>
          </form>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 ml-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
      >
        Submit
      </button>
    </div>
  );
};

export default HeartDiseaseForm;
