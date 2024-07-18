import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Overview from "../Pages/Dashboard/Overiew/Overview";
import DashboardLayout from "../Layout/DashboardLayout";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        // {
        //     path: '/',
        //     element: <DashboardLayout></DashboardLayout>
        // },
        {
          path:'/',
          element:<Overview></Overview>
        }
       

      ]
      
    },
    // {
    //   path:'/dashboard',
    //   element: <DashboardLayout></DashboardLayout>
    // }
  ]);
