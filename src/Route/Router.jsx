import Analysis from "../Pages/Dashboard/Analysis/Analysis";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Students from "../Pages/Dashboard/Students/Students";
import Rooms from "../Pages/Dashboard/Rooms/Rooms";
import Complaints from "../Pages/Dashboard/Complaints/Complaints";
import MainRooms from "../Pages/MainRooms/MainRooms";
import Occupancy from "../Pages/MainRooms/Occupancy/Occupancy";
import Hostels from "../Pages/MainRooms/Hostels/Hostels";


export const router = createBrowserRouter([
  {
    path: "/",
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
        path: '/rooms',
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
            element: <Rooms />
          },
          {
            path: 'furniture',
            element: <Complaints />
          },
        ]
      },
      {
        path: '/students',
        element: <></>
      },
      {
        path: '/notice_board',
        element: <></>
      },
    ],
  },
]);

