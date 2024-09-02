import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAllJobsContext } from "../pages/AllJobs";
import { useLocation, useNavigate } from "react-router-dom";

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  console.log(search);
  console.log(pathname);
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() => {
          let prev = currentPage - 1;
          if (prev < 1) prev = numOfPages;
          handlePageChange(prev);
        }}
      >
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
              onClick={() => {
                handlePageChange(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}{" "}
      </div>
      <button
        className="btn next-btn"
        onClick={() => {
          let next = currentPage + 1;
          if (next > numOfPages) next = 1;
          handlePageChange(next);
        }}
      >
        {" "}
        Tiếp theo
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
