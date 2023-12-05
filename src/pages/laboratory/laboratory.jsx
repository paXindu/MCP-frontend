import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory

function Laboratory() {
  const history = useNavigate(); // Get the history object

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
    
    history.push('/intranet/labdata');
  };

  const handleEnterReportData = () => {
    history('/intranet/labdata');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" pt-100">
      <h1 className="text-3xl mb-72  ">
        Laboratory
      </h1></div>
      <div className="mt-1 p-2 rounded-md bg-white border border-gray-300 shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-50">
      
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
              <p><strong>Lab test:</strong> {recommendationData.labTest}</p>
              <p><strong>Patient NIC:</strong> {recommendationData.appointment?.patient?.patientNic}</p>
              <p><strong>Patient Phone:</strong> {recommendationData.appointment?.patient?.patientPhone}</p>
            </div>
          </div>
        ) : (
          <p className="mt-4">Enter a Recommendation ID and press Enter or click Submit to see data.</p>
        )}

        {/* New button for entering report data */}
        <button
          onClick={handleEnterReportData}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Enter Report Data
        </button>
      </div>
    </div>
  );
}

export default Laboratory;
