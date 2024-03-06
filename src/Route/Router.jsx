import Analysis from "../Pages/Dashboard/Analysis/Analysis";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Students from "../Pages/Dashboard/Students/Students";
import Rooms from "../Pages/Dashboard/Rooms/Rooms";
import HostelRooms from "../Pages/MainRooms/Rooms/Rooms";
import Complaints from "../Pages/Dashboard/Complaints/Complaints";
import MainRooms from "../Pages/MainRooms/MainRooms";
import Occupancy from "../Pages/MainRooms/Occupancy/Occupancy";
import Hostels from "../Pages/MainRooms/Hostels/Hostels";
import Furniture from "../Pages/MainRooms/Furniture/Furniture";
import MainStudents from "../Pages/Students/MainStudents";
import ManageStudents from "../Pages/Students/ManageStudents/ManageStudents";
import AddStudents from "../Pages/Students/AddStudents/AddStudents";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import AddComplaints from "../Pages/Students/AddComplaints/AddComplaints";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'analysis',
            element: <Analysis />
          },
          {
            path: 'students',
            element: <Students />
          },
          {
            path: 'rooms',
            element: <Rooms />
          },
          {
            path: 'complaints',
            element: <Complaints />
          },
        ]
      },
      {
        path: '/dashboard/rooms',
        element: <MainRooms />,
        children: [
          {
            path: 'occupancy',
            element: <Occupancy />
          },
          {
            path: 'hostel',
            element: <Hostels />
          },
          {
            path: 'rooms',
            element: <HostelRooms />
          },
          {
            path: 'furniture',
            element: <Furniture />
          },
        ]
      },
      {
        path: '/dashboard/students',
        element: <MainStudents />,
        children: [
          {
            path: 'manegestudents',
            element: <ManageStudents />
          },
          {
            path: 'addstudents',
            element: <AddStudents />
          },
          {
            path: 'addcomplaints/:id',
            element: <AddComplaints />
          },
        ]
      },
      {
        path: '/dashboard/notice_board',
        element: <></>
      },
    ],
  },
  {
    path: 'signin',
    element: <Signin />
  },
  {
    path: 'signup',
    element: <Signup />
  },
]);

