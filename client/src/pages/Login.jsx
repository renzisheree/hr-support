import { toast } from "react-toastify";
import customFetch from "../../utils/customeFetch.js";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import { FormRow, Logo } from "../components";
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
  }
};
const Login = () => {
  const navigate = useNavigate();
  const isSubmitting = navigate.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Đăng nhập</h4>
        <FormRow type="text" name="email" />
        <FormRow type="password" name="password" labelText="Mật khẩu" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Xin chờ..." : "Đăng nhập"}
        </button>

        <button type="submit" className="btn btn-block">
          Tìm hiểu thêm...
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
