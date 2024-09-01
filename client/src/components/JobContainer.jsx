import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import PageBtnContainer from "./PageBtnContainer";

const JobContainer = () => {
  const { data } = useAllJobsContext();
  const { data: jobsData, totalJobs, numOfPages } = data;

  if (jobsData === 0) {
    return (
      <Wrapper>
        {" "}
        <h2> No job to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {" "}
        Tìm thấy {totalJobs} job{jobsData.length > 1 && "s"}{" "}
      </h5>
      <div className="jobs">
        {jobsData.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobContainer;
