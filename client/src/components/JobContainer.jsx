import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pages/AllJobs";

const JobContainer = () => {
  const { data } = useAllJobsContext();
  const { data: jobsData } = data;

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
      <div className="jobs">
        {jobsData.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobContainer;
