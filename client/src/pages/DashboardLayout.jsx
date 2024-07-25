import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard.js'
import { BigSideBar, Navbar, SmallSideBar } from '../components'

const DashboardContext = createContext(null)
const DashboardLayout = () => {
	const user = { name: 'john' }
	const [showSidebar, setShowSidebar] = useState(false)
	const [isDarkTheme, setIsDarkTheme] = useState(false)
	const toggleDarkTheme = () => {
		console.log('toggle dark theme')
	}
	const toggleSidebar = () => {
		console.log(showSidebar)
		setShowSidebar(!showSidebar)
	}
	const logoutUser = async () => {
		console.log('Logout user')
	}
	return (
		<DashboardContext.Provider value={{
			user,
			showSidebar,
			isDarkTheme,
			toggleDarkTheme,
			toggleSidebar,
			logoutUser
		}}>
			<Wrapper>
				<main className="dashboard">
					<SmallSideBar></SmallSideBar>
					<BigSideBar></BigSideBar>
					<div className="">
						<Navbar/>
						<div className="dashboard-page">
							<Outlet/>
						</div>
					</div>
				</main>
			
			</Wrapper>
		</DashboardContext.Provider>
	)
}
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout