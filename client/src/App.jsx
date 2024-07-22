import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout.jsx";


const router = createBrowserRouter([{path: '/', element: <HomeLayout/>}, {path: '/about', element: <h1>about page</h1>}
]);
const App = () => {
    return <RouterProvider router={router}/>
};

export default App;
