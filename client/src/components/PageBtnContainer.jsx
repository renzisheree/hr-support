import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  console.log(pages);
  return (
    <Wrapper>
      <button className="btn prev-btn">
        <HiChevronDoubleLeft />
        Quay lại
      </button>
      <div className="btn-container">
        {" "}
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn page-btn ${
                pageNumber === currentPage && "active"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}{" "}
      </div>
      <button className="btn next-btn">
        {" "}
        Tiếp theo
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
