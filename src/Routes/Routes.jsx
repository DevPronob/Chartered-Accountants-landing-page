import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AccountantDetails from "../Pages/AccountantDetails/AccountantDetails";



  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        
        {
            path:'/:id',
            element:<AccountantDetails></AccountantDetails>
        },
        
      ]
    },
  ]);
