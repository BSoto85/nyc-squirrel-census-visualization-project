import { useState, useEffect } from "react";
import CoatColorChart from "../Components/CoatColorChart";
import RadarChart from "../Components/RadarChart";
import ScatterChart from "../Components/ScatterChart";
import Chart from "chart.js/auto";
import DropDownMenu from "../Components/DropDownMenu";
import "../Components/Chart.css";


const ChartsView = () => {
  const [chartType, setChartType] = useState("Pie");
  const [scatterAndRadarSquirrelData, setScatterAndRadarSquirrelData] =
    useState([]);

  return (
    <div>
      <RadarChart />
      <DropDownMenu chartType={chartType} setChartType={setChartType} />
      <ScatterChart
        chartType={chartType}
        scatterAndRadarSquirrelData={scatterAndRadarSquirrelData}
        setScatterAndRadarSquirrelData={setScatterAndRadarSquirrelData}
      />
    </div>
  );
};

export default ChartsView;
