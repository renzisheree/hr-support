import { toast } from "react-toastify";
import customFetch from "../../utils/customeFetch";
import { useLoaderData } from "react-router-dom";
import { JobContainer, SearchContainer } from "../components";
import { createContext, useContext } from "react";

export const loader = async ({ request }) => {
  console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log;
  try {
    const { data } = await customFetch.get("/jobs", {
      params,
    });
    return { data, params, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobContext = createContext();
const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllJobContext.Provider value={{ data, searchValues }}>
      <SearchContainer></SearchContainer>
      <JobContainer></JobContainer>
    </AllJobContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobContext);
export default AllJobs;
