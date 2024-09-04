import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage.js";
import notfound from "../assets/images/error.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notfound} alt="not-found" />
          <h3>Ôi~ Đã có sự cố xảy ra</h3>
          <p>Có vẻ như bạn đang đi lạc?</p>
          <Link to="/dashboard"> Quay lại </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3> Đã xảy ra lỗi</h3>
      <Link to={"/"}>Home Page </Link>
    </Wrapper>
  );
};

export default Error;
