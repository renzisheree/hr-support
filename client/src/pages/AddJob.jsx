import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRowSelect } from "../components";
import { FormRow } from "../components";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
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
  const data = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" labelText="Vị trí" />{" "}
          <FormRow type="text" name="company" labelText="Công ty" />{" "}
          <FormRow
            type="text"
            name="JobLocation"
            defaultValue={data.location}
            labelText="Nơi làm việc"
          />
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
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Xin chờ" : "Thêm việc"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
