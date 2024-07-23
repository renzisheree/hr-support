import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardLayout, Error, HomeLayout, Landing, Login, Register } from './pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout/>,
		errorElement: <Error/>,
		children: [
			{
				index: true,
				element: <Landing/>,
			},
			{
				path: '/about',
				element: <h1>about page</h1>,
			},
			{
				path: '/login',
				element: <Login/>,
			},
			{
				path: '/register',
				element: <Register/>,
			},
			{
				path: '/dashboard',
				element: <DashboardLayout/>,
			},
		],
	},
])
const App = () => {
	return <RouterProvider router={router}/>
}

export default App
