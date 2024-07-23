import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardLayout, HomeLayout, Landing, Login, Register, } from './pages'

const router = createBrowserRouter([{
  path: '/',
  element: <HomeLayout/>,
  children: [
    { index: true, element: <Landing/> },
    { path: '/about', element: <h1>about page</h1> },
    { path: '/login', element: <Login/> },
    { path: '/register', element: <Register/> },
    { path: '/dashboard', element: <DashboardLayout/> }
  ]
}
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App
