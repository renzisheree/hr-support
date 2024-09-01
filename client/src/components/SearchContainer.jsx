import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";
const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;
  const submit = useSubmit();
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title"> Tìm kiếm...</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            onChange={debounce((form) => {
              submit(form);
            })}
            defaultValue={search}
          />
          <FormRowSelect
            labelText="Tình trạng"
            name="jobStatus"
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
            list={["all", ...Object.values(JOB_STATUS)]}
          />{" "}
          <FormRowSelect
            labelText="Loại công việc"
            name="jobType"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
          />
          <FormRowSelect
            name="sort"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
          ></FormRowSelect>
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Bỏ chọn
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
