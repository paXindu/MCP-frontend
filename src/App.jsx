import React, { useState } from "react";
import "./index.css";
import Home from "./pages/home/home";
import Admin from "./pages/admin/admin";
import Reception from "./pages/reception/reception";
import Patient from "./pages/patient/patientProfile";
import Doctor from "./pages/doctor/doctor";
import PatientLogin from "./pages/patient/patientLogin";
import EmployeeLogin from "./pages/employee/employeeLogin";
import PatientRegistration from "./pages/patient/patinetRegistration";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
// import MainMenu from "./components/mainmenu";
import PatientProfile from "./pages/patient/patientProfile";
import EmployeeRegistration from "./pages/employee/employeeRegistration";
import DoctorsList from "./pages/channeling/channeling";
import NavBar from "./components/navbar";
import Intranet from "./pages/intranet/intranet";
import DoctorLogin from "./pages/doctor/doctorLogin";
import Laboratory from "./pages/laboratory/laboratory";
import Pharmacist from "./pages/phamacist/pharmacist";
import HeartDiseaseForm from "./pages/laboratory/enterdata";
import ViewReport from "./pages/patient/viewReport";
import MyAppoint from "./pages/patient/viewReport";
import AdminLogin from "./pages/admin/adminlogin";
import Patientdata from "./pages/admin/patientdata";
// import AppContext from "./provider/AppContex";

function App() {
  const Layout = () => {
    return (
  //     <div className="lg:flex">
 
  // <div className="lg:w-96 hidden lg:block">
  //   <MainMenu />
  // </div>

  
  <div className="w-full">
    <Outlet />
  </div>
// </div>
    );
  };

  const IntranetLayout = () => {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/loggedin",
      element: <Layout />,
      children: [
        {
          path: "patient",
          element: <PatientProfile />,
        },
        {
          path: "channelingdoctor",
          element: <DoctorsList />,
        },
        {
          path: "myappoint",
          element: <MyAppoint />,
        },
      ],
    },
    {
      path: "/intranet",
      element: (
        <>
          <IntranetLayout />
          <Intranet />
        </>
      ),
      children: [
        {
          path: "reception",
          element: <Reception />,
        },
        {
          path: "doctor",
          element: <Doctor />,
        },
        {
          path: "admin",
          element: <Admin />,
        },{
          path: "adminlogin",
          element: <AdminLogin />,
        },

        {
          path: "employeeregistration",
          element: <EmployeeRegistration />,
        },{
          path: "patientdata",
          element: <Patientdata />,
        },
      {
        path:"doctorlogin",
        element:<DoctorLogin/>,
      },{
        path: "laboratory",
        element: <Laboratory />,
      },{
        path: "pharmacist",
        element: <Pharmacist />,
      },{
        path: "labdata",
        element: <HeartDiseaseForm />,
      },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "patientlogin",
      element: <PatientLogin />,
    },
    {
      path: "patientregistration",
      element: <PatientRegistration />,
    },
  ]);

  // const [patientID, setPatientID] = useState(null);

  return (
    // <AppContext.Provider value={{ patientID, setPatientID }}>
      <RouterProvider router={router} />
    // </AppContext.Provider>
  );
}

export default App;
