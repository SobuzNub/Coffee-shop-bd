import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";

import AddCoffee from "../page/Dashboard/Host/AddCoffee";
import MyListings from "../page/Dashboard/Host/MyListings";
import Statistics from "../page/Dashboard/common/Statistics";
import Profile from "../page/Dashboard/Common/Profile";
import ManageUsers from "../page/Dashboard/Admin/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import HostRoute from "./HostRoute";
import CoffeeDetails from "../page/CoffeeDetails/CoffeeDetails";

import OrderNow from "../page/OrderNow";
import MyBookings from "../components/Dashboard/Menu/MyBookings";
import ManageBookings from "../page/Dashboard/Host/ManageBookings";

// import SecretThings from "../page/shared/Secret/SecretThings";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/item/:id',
        element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>
      },
      {
        path: '/menuCard',
        element: <PrivateRoute><OrderNow></OrderNow></PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute><Statistics></Statistics></PrivateRoute>
      },
      {
        path: 'add-coffee',
        element: <PrivateRoute><HostRoute><AddCoffee></AddCoffee></HostRoute></PrivateRoute>
      },
      {
        path: 'my-listings',
        element: <PrivateRoute><HostRoute><MyListings></MyListings></HostRoute></PrivateRoute>
      },
      {
        path: 'manage-bookings',
        element: <PrivateRoute><HostRoute><ManageBookings></ManageBookings></HostRoute></PrivateRoute>
      },
      {
        path: 'my-bookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path: 'manage-users',
        element:
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers>
              </ManageUsers>
            </AdminRoute>
          </PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ]
  }
]);

