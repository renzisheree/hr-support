import { Form, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRowSelect, SubmitBtn } from "../components";
import { FormRow } from "../components";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import customFetch from "../../utils/customeFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/jobs", data);
    toast.success("Job created");
    redirect("/dashboard");
    return redirect("all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" labelText="Vị trí" />{" "}
          <FormRow type="text" name="company" labelText="Công ty" />{" "}
          <FormRow type="text" name="JobLocation" labelText="Nơi làm việc" />
          <FormRowSelect
            labelText="Trạng thái"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="Loại công việc"
            name="jobType"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
