import Wrapper from '../assets/wrappers/RegisterAndLoginPage.js'
import { FormRow, Logo } from '../components'
import { Link } from 'react-router-dom'

const Register = () => {
	return (
		<Wrapper>
			<form action="" className="form"><Logo/>
				<h4>Đăng ký</h4>
				<FormRow type="text" name="name"/>
				<FormRow type="text" name="lastName" labelText="Last Name"/>
				<FormRow type="text" name="Khu Vực"/>
				<FormRow type="email" name="email"/>
				<FormRow type="password" name="password"/>
				<button className="btn btn-block" type="submit">Xác nhận</button>
				<p>Đã có tài khoản?
					<Link to="/login" className="member-btn"> Đăng nhập ngay</Link></p>
			</form>
		</Wrapper>
	)
}

export default Register