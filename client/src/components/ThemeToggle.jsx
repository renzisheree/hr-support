import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useDashboardContext } from '../pages/DashboardLayout.jsx'
import Wrapper from '../assets/wrappers/ThemeToggle.js'

const ThemeToggle = () => {
	const {
		isDarkTheme,
		toggleDarkTheme
	} = useDashboardContext()
	return (
		<Wrapper onClick={toggleDarkTheme}>
			{isDarkTheme ? <BsFillSunFill/> : <BsFillMoonFill/>}
		</Wrapper>
	)
}

export default ThemeToggle
