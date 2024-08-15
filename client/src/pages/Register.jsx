import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import { FormRow, Logo } from "../components";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
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
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
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
        <button className="btn btn-block" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang gửi..." : "Đăng ký"}
        </button>
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
