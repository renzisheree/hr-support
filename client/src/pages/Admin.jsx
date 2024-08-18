import { toast } from "react-toastify";
import customFetch from "../../utils/customeFetch";
import { redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/StatsContainer";
import { StatItem } from "../components";
import { FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";

export const loader = async () => {
  try {
    const response = await customFetch.get("/user/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorize to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  console.log(users, jobs);
  return (
    <Wrapper>
      <StatItem
        title="Người dùng hiện tại"
        count={users}
        color="#e9b949"
        bcg="#fcefct"
        icon={<FaSuitcaseRolling />}
      ></StatItem>{" "}
      <StatItem
        title="Tổng số công việc"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      ></StatItem>{" "}
      <StatItem
        title="Người dùng hiện tại"
        count={users}
        color="#e9b949"
        bcg="#fcefct"
        icon={<FaSuitcaseRolling />}
      ></StatItem>
    </Wrapper>
  );
};

export default Admin;
