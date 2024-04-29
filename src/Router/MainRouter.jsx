import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Page/ErrorPage";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import Country from "../Page/Country";
import AddSpot from "../Page/AddSpot";
import MyList from "../Page/MyList";
import AllList from "../Page/AllList";
import Details from "../Page/Details";
import Update from "../Page/Update";
import Bookings from "../Page/Bookings";
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allList",
                element: <AllList/>
            },
            {
                path: "/spot/:id",
                element: <PrivateRoute><Details/></PrivateRoute>,
                loader:({params})=>fetch(`https://tour-server-red.vercel.app/spotS/${params.id}`),
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><Update/></PrivateRoute>,
                loader:({params})=>fetch(`https://tour-server-red.vercel.app/update/${params.id}`),
            },
            {
                path: "/add-Spot",
                element: <PrivateRoute><AddSpot/></PrivateRoute>
            }, 
            {
                path: "/Bookings",
                element: <PrivateRoute><Bookings/></PrivateRoute>
            }, 
            {
                path: "/my-list",
                element: <PrivateRoute><MyList/></PrivateRoute>
            }, 
            {
                path: "/country/:Cname",
                element: <Country/>,
                loader:({params})=>fetch(`https://tour-server-red.vercel.app/Spot/${params.Cname}`),
              },
           
        ]
    }, 
    {
        path: "/login",
        element: <SignIn/>
    },
    {
        path: "/register",
        element:<SignUp/> 
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    }
])

export default MainRouter;