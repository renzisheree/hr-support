import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer.js";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { data, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type={"button"}
        className={"btn logout-btn"}
        onClick={() => {
          setShowLogout(!showLogout);
        }}
      >
        {data.avatar ? (
          <img src={data.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}
        {data?.lastName}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className={"dropdown-btn"} onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
