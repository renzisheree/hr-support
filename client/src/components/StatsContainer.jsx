import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";
const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "Đang chờ",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#f59e0b",
      bgc: "#fef3c7",
    },
    {
      title: "Phỏng vấn",
      count: defaultStats?.pending || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bgc: "#e0e8f9",
    },
    {
      title: "Từ chối",
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bgc: "#ffeeee",
    },
  ];
  console.log(defaultStats);
  return (
    <Wrapper>
      {stats.map((item) => (
        <StatItem key={item.title} {...item}></StatItem>
      ))}
    </Wrapper>
  );
};

export default StatsContainer;
