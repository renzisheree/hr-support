import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage.js'
import { FormRow, Logo } from '../components'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<Wrapper>
			<form action="" className="form">
				<Logo/>
				<h4>Đăng nhập</h4>
				<FormRow type="text" name="email"/>
				<FormRow type="password" name="password"/>
				<button type="submit" className="btn btn-block">Đăng nhập</button>
				
				<button type="submit" className="btn btn-block">Explore more</button>
				<p>Chưa có tài khoản?
					<Link to="/register" className="member-btn">Đăng ký ngay</Link></p>
			</form>
		</Wrapper>
	)
}

export default Login