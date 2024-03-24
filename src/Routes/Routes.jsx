import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import CheckOut from "../components/CheckOut/CheckOut";
import BookService from "../components/BookService/BookService";
import Bookings from "../components/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path : "login",
          element : <Login></Login>
        },
        {
          path : 'signup',
          element : <SignUp></SignUp>
        },
        {
          path : 'checkout/:id',
          element : <CheckOut></CheckOut>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path : 'book/:id',
          element :<PrivateRoute> <BookService></BookService></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path : "/bookings",
          element : <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);