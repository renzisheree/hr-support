import React from 'react'
import Wrapper from '../assets/wrappers/Navbar.js'
import { MdMenuOpen } from 'react-icons/md'
import Logo from './Logo.jsx'
import { useDashboardContext } from '../pages/DashboardLayout.jsx'

const Navbar = () => {
	const { toggleSidebar } = useDashboardContext()
	return (
		<Wrapper>
			<div className="nav-center">
				<button type="button" className="toggle-btn" onClick={toggleSidebar}>
					<MdMenuOpen/>
				</button>
				<div>
					<Logo/>
					<h4 className="logo-text">Dashboard</h4>
				</div>
				<div className="btn-container">Toggle/Logout</div>
			
			</div>
		</Wrapper>
	)
}

export default Navbar