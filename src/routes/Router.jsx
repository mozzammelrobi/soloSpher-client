import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
       errorElement:<ErrorPage></ErrorPage> ,
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`),
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/job/:id',
                element:<JobDetails></JobDetails>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
            },
            {
                path: '/addJob',
                element: <AddJob></AddJob>
            }
        ]
    }
])

export default router