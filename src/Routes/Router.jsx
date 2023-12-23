import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import UserProfile from "../pages/Dashboard/UserProfile";
import CreateNewTask from "../pages/Dashboard/CreateNewTask";
import AllTask from "../pages/Dashboard/AllTask";
import Edittask from "../pages/Dashboard/Edittask";
import Edittaskcardpage from "../pages/Dashboard/Edittaskcardpage";
import Aboutus from "../pages/Aboutus/Aboutus";
import Gallery from "../pages/Gallery/Gallery";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Register></Register>
      },
      {
        path:"/aboutus",
        element:<Aboutus></Aboutus>
      },
      {
        path:"/gallery",
        element:<Gallery></Gallery>
      },
      {
        path: 'dashboard/',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/userprofile',
            element: <UserProfile></UserProfile>
          },
          {
            path: '/dashboard/createnewtask',
            element: <CreateNewTask></CreateNewTask>
          },
          {
            path: '/dashboard/alltask',
            element: <AllTask></AllTask>
          },
          {
            path:'/dashboard/edittask',
            element:<Edittask></Edittask>
          },
          {
            path:'/dashboard/edittask/edittask/:id',
            element:<Edittaskcardpage></Edittaskcardpage>
          },
         
        ]
      }
    ]

  },
]);