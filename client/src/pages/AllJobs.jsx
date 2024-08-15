import { toast } from "react-toastify";
import customFetch from "../../utils/customeFetch";
import { useLoaderData } from "react-router-dom";
import { JobContainer, SearchContainer } from "../components";
import { createContext, useContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobContext = createContext();
const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <AllJobContext.Provider value={{ data }}>
      <SearchContainer></SearchContainer>
      <JobContainer></JobContainer>
    </AllJobContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobContext);
export default AllJobs;
