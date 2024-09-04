import { toast } from "react-toastify";
import customFetch from "../../utils/customeFetch.js";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import { FormRow, Logo, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Login = () => {
  const navigate = useNavigate();
  const loginUserDemo = async () => {
    const data1 = { email: "test@test.com", password: "secret123" };
    try {
      await customFetch.post("/auth/login", data1);
      toast.success("Dạo một vòng nào");
      navigate("/dashboard");
      return null;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  const loginAdmin = async () => {
    const data1 = { email: "mapneverdie1@gmail.com", password: "11021102aA" };
    try {
      await customFetch.post("/auth/login", data1);
      toast.success("Login as admin");
      navigate("/dashboard");
      return null;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Đăng nhập</h4>
        <FormRow type="text" name="email" />
        <FormRow type="password" name="password" labelText="Mật khẩu" />
        <SubmitBtn />

        <button type="button" onClick={loginUserDemo} className="btn btn-block">
          Dùng thử...
        </button>
        <button type="button" onClick={loginAdmin} className="btn btn-block">
          Admin demo
        </button>
        <p>
          Chưa có tài khoản?
          <Link to="/register" className="member-btn">
            Đăng ký ngay
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
