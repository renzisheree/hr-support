import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import { FormRow, Logo, SubmitBtn } from "../components";
import { Form, redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customeFetch.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};
const Register = () => {
  return (
    <Wrapper>
      <Form method="post" action="" className="form">
        <Logo />
        <h4>Đăng ký</h4>
        <FormRow type="text" name="name" labelText="Họ của bạn" />
        <FormRow type="text" name="lastName" labelText="Tên của bạn" />
        <FormRow type="text" name="location" labelText="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" labelText="Mật khẩu" />
        <SubmitBtn />
        <p>
          Đã có tài khoản?
          <Link to="/login" className="member-btn">
            {" "}
            Đăng nhập ngay
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
