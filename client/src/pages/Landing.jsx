import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage.js'
import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import { Logo } from '../components'

const Landing = () => {
	return (
		<Wrapper>
			<nav><Logo/></nav>
			<div className="container page">
				<div className="info">
					<h1>TÌM<span> VIỆC</span> NGAY</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut autem beatae esse, hic ipsa maxime
						minus neque nostrum reiciendis rerum tempora veritatis voluptate voluptates.</p>
					<Link to="/register" className="btn register-link">ĐĂNG KÝ
					</Link>
					<Link to="/login" className="btn">ĐĂNG NHẬP / Demo User
					</Link>
				</div>
				<img src={main} alt="job-hunt" className="img main-img"/>
			</div>
		</Wrapper>
	)
}

export default Landing