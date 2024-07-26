import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
	AddJob,
	Admin,
	AllJob,
	DashboardLayout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Profile,
	Register,
	Stats
} from './pages'

export const checkDefaultTheme = () => {
	const isDarkTheme = localStorage.getItem('dark-theme') === 'true'
	document.body.classList.toggle('dark-theme', isDarkTheme)
	return isDarkTheme
}
const isDarkThemeEnabled = checkDefaultTheme()
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
				children: [
					{
						index: true,
						element: <AddJob/>
					},
					{
						path: 'stats',
						element: <Stats/>
					},
					{
						path: 'all-jobs',
						element: <AllJob/>
					},
					{
						path: 'profile',
						element: <Profile/>
					},
					{
						path: 'admin',
						element: <Admin/>
					}
				]
			}
		]
	}
])

const App = () => {
	return <RouterProvider router={router}/>
}

export default App
