import Wrapper from "../assets/wrappers/SmallSidebar.js";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo.jsx";

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
