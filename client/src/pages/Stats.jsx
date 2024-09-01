import { useLoaderData } from "react-router-dom";
import customFetch from "../../utils/customeFetch";
import { ChartsContainer, StatsContainer } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};
const Stats = () => {
  const { defaultStats, monthlyApplication } = useLoaderData();

  return (
    <>
      <StatsContainer defaultStats={defaultStats}></StatsContainer>{" "}
      {monthlyApplication?.length > 0 && (
        <ChartsContainer data={monthlyApplication}></ChartsContainer>
      )}
    </>
  );
};

export default Stats;
