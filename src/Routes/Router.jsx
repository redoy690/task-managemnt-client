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
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: '/dashboard/userprofile',
            element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
          },
          {
            path: '/dashboard/createnewtask',
            element: <PrivateRoute><CreateNewTask></CreateNewTask></PrivateRoute>
          },
          {
            path: '/dashboard/alltask',
            element: <PrivateRoute><AllTask></AllTask></PrivateRoute>
          },
          {
            path:'/dashboard/edittask',
            element:<PrivateRoute><Edittask></Edittask></PrivateRoute>
          },
          {
            path:'/dashboard/edittask/edittask/:id',
            element:<PrivateRoute><Edittaskcardpage></Edittaskcardpage></PrivateRoute>
          },
         
        ]
      }
    ]

  },
]);