import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar.js'
import NavLinks from './NavLinks.jsx'
import Logo from './Logo.jsx'
import { useDashboardContext } from '../pages/DashboardLayout.jsx'

const BigSideBar = () => {
	const { showSidebar } = useDashboardContext()
	return (
		<Wrapper>
			<div className={showSidebar ? `sidebar-container show-sidebar` : 'sidebar-container'}>
				<div className="content">
					<Logo/> <NavLinks isBigSidebar/>
				</div>
			</div>
		
		</Wrapper>
	)
}

export default BigSideBar