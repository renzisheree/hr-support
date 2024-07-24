import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar.js'
import { useDashboardContext } from '../pages/DashboardLayout.jsx'

const SmallSideBar = () => {
	const data = useDashboardContext()
	
	return (
		
		<Wrapper>
			Small sidebar
		</Wrapper>
	)
}

export default SmallSideBar