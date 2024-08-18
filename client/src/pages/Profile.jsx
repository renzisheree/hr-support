import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useDashboardContext } from "./DashboardLayout";
import { FormRow } from "../components";
import { toast } from "react-toastify";
import customFetch from "../../utils/customeFetch";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 100000) {
    toast.error("Image size is too large");
    return null;
  }
  try {
    await customFetch.patch("/user/update-user", formData);
    toast.success("Profile updated successfully");
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Profile = () => {
  const { data } = useDashboardContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { name, lastName, email, location } = data;
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">Trang cá nhân</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Hãy chọn một ảnh (tối đa 1mb)
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow type="text" name="lastName" defaultValue={lastName} />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <button
            className="btn btn-block form-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {" "}
            {isSubmitting ? "Vui lòng chờ..." : "Xác nhận"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
