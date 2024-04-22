import { createBrowserRouter } from "react-router-dom";
import About from "../components/about/About";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import Contact from "../components/contact/Contact";
import Detiels from "../components/detiels/Detiels";
import Home from "../components/home/Home";
import OurServicess from "../components/ourServicess/OurServicess";
import PrivateProfileRoute from "../components/privateRoute/PrivateProfileRoute";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import EditProfile from "../components/Profile/EditProfile";
import Profile from "../components/Profile/Profile";
import Root from "../components/Root";
import Error from "../error/Error";


const route = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        errorElement: <Error/>,
        children : [
            {
                path: '/',
                loader : () => fetch('/data.json'),
                element : <Home></Home>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path:'/ourservicess',
                loader : () => fetch('/data.json'),
                element : <OurServicess ></OurServicess>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registrations',
                element : <Registration></Registration>
            },
            {
                path: '/detiels/:id',
                loader : () => fetch('/data.json'),
                element: <PrivateRoute><Detiels></Detiels></PrivateRoute>
            },
            {
                path : '/profile',
                element : <PrivateProfileRoute><Profile></Profile></PrivateProfileRoute>,
            },
            {
                path : '/editProfile',
                element : <PrivateProfileRoute><EditProfile></EditProfile></PrivateProfileRoute>
            }
        ]
    }
]);

export default route