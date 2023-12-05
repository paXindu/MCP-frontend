import React from "react";
import { useNavigate } from "react-router-dom";

function Intranet() {
  const navigate = useNavigate();

  function handleClickAdmin() {
    navigate("/intranet/adminlogin");
  }

  const handleClickDoctor = () => {
    navigate("/intranet/doctorlogin");
  };

  const handleClickPharmacist = () => {
    navigate("/intranet/pharmacist");
  };

  const handleClickLaboratory = () => {
    navigate("/intranet/laboratory");
  };

  return (
    <div className="flex items-center justify-center min-h-screen gap-36 ">
      <button className="bg-red-500 rounded-lg p-11 hover:bg-red-900" onClick={handleClickAdmin}>
        Admin
      </button>
      <button
        className="bg-red-500 rounded-lg p-11 hover:bg-red-900"
        onClick={handleClickDoctor}
      >
        Doctor
      </button>
      <button
        className="bg-red-500 rounded-lg p-11 hover:bg-red-900"
        onClick={handleClickLaboratory}
      >
        Laboratory 
      </button>
      <button
        className="bg-red-500 rounded-lg p-11 hover:bg-red-900"
        onClick={handleClickPharmacist}
      >
        Pharmacist
      </button>
    </div>
  );
}

export default Intranet;
