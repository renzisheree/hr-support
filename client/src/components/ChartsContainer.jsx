import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { AreaChart, BarChart } from "./index.js";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      {" "}
      <h4>Ứng tuyển hàng tháng</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
