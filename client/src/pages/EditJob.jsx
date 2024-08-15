import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import customFetch from "../../utils/customeFetch";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect } from "../components";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard");
  }
};
export const action = async ({ request, params }) => {
  const formdata = await request.formData();
  const data = Object.fromEntries(formdata);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Job edited");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};

const EditJob = () => {
  const { data } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            labelText="Vị trí"
            defaultValue={data.position}
          />{" "}
          <FormRow
            type="text"
            name="company"
            labelText="Công ty"
            defaultValue={data.company}
          />{" "}
          <FormRow
            type="text"
            name="JobLocation"
            labelText="Địa chỉ"
            defaultValue={data.JobLocation}
          />{" "}
          <FormRow
            type="text"
            name="JobLocation"
            labelText="Địa chỉ"
            defaultValue={data.JobLocation}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="Trạng thái"
            list={Object.values(JOB_STATUS)}
          />{" "}
          <FormRowSelect
            name="jobType"
            labelText="Loại công việc"
            list={Object.values(JOB_TYPE)}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Vui lòng chờ..." : "Xác nhận"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
