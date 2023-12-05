import React, { useState, useEffect } from 'react';

function Pharmacist() {
  const [recommendationData, setRecommendationData] = useState(null);
  const [recommendationId, setRecommendationId] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/Recommendation/read/${recommendationId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          console.log('Recommendation not found.');
          setRecommendationData(null); 
        } else {
          throw new Error('Network response was not ok');
        }
      } else {
        const data = await response.json();
        setRecommendationData(data);
      }
    } catch (error) {
      console.error('Error fetching recommendation data:', error);
     
    }
  };

  const handleInputChange = (event) => {
    setRecommendationId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mt-1 p-2 block w-full max-w-md rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50">
      <h1 className="text-3xl font-semibold text-red-500 mb-4">Pharmacy</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Recommendation ID:
            <input
              type="text"
              value={recommendationId}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50"
              placeholder="Type the recommendation ID"
              required
            />
          </label>
          <br />

          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>

        {recommendationData ? (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Recommendation Data:</h2>
            <div className="mt-2">
              <p><strong>Recommendation ID:</strong> {recommendationData.recommendationId}</p>
              <p><strong>Drugs:</strong> {recommendationData.drugs}</p>
              
              <p><strong>Patient NIC:</strong> {recommendationData.appointment?.patient?.patientNic}</p>
              <p><strong>Patient Phone:</strong> {recommendationData.appointment?.patient?.patientPhone}</p>
            </div>
          </div>
        ) : (
          <p className="mt-4">Enter a Recommendation ID and press Enter or click Submit to see data.</p>
        )}
      </div>
    </div>
  );
}

export default Pharmacist;
