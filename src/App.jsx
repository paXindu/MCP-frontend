import { useState } from "react";
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
import MainMenu from "./components/mainmenu";
import PatientProfile from "./pages/patient/patientProfile";
import EmployeeRegistration from "./pages/employee/employeeRegistration";
import DoctorsList from "./pages/channeling/channeling";

function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <MainMenu />
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
          path: "admin",
          element: <Admin />,
        },
        {
          path: "patient",
          element: <PatientProfile />,
        },
        {
          path: "reception",
          element: <Reception />,
        },
        {
          path: "doctor",
          element: <Doctor />,
        },
        {
          path: "channelingdoctor",
          element: <DoctorsList />,
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
      path: "employeeregistration",
      element: <EmployeeRegistration />,
    },
    {
      path: "patientregistration",
      element: <PatientRegistration />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
