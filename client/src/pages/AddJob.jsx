import { useOutletContext } from "react-router-dom";

const AddJob = () => {
  const data = useOutletContext();
  return <h1>ADD JOB</h1>;
};

export default AddJob;
