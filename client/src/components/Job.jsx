import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
day.extend(advancedFormat);
const Job = ({
  _id,
  position,
  company,
  JobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={JobLocation} />{" "}
          <JobInfo icon={<FaCalendarAlt />} text={date} />{" "}
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div
            className={`status ${
              jobStatus === "Phỏng vấn"
                ? "interview"
                : jobStatus === "Từ chối"
                ? "declined"
                : "pending"
            }`}
          >
            {jobStatus}
          </div>
        </div>
        <footer className="actions">
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">
            Sửa
          </Link>
          <Form method="post" action={`../delete-job/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Xoá
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
