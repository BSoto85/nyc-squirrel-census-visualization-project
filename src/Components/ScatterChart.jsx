import { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Scatter } from "react-chartjs-2";

Chart.register(...registerables);

const URL = import.meta.env.VITE_BASE_API_URL;

const ScatterChart = ({
  chartType,
  scatterAndRadarSquirrelData,
  setScatterAndRadarSquirrelData,
}) => {
  // const latitudeLowerRange = 40.7679908;
  // const latitudeUpperRange = 40.7968755;
  // const longitudeLowerRange = -73.9731212;
  // const longitudeUpperRange = -73.9578941;

  // //sections of central park
  // const s1LongitudeLowerRange = -73.9578941;
  // const s1LongitudeUpperRange = -73.9528355;

  // const s2LongitudeLowerRange = -73.9528355;
  // const s2LongitudeUpperRange = -73.9566177;

  // const s3LongitudeLowerRange = -73.9656002;
  // const s3LongitudeUpperRange = -73.960375;

  // const s4LongitudeLowerRange = -73.969277;
  // const s4LongitudeUpperRange = -73.9642473;

  // const s5LongitudeLowerRange = -73.9728115;
  // const s5LongitudeUpperRange = -73.968439;

  // const s6LongitudeLowerRange = -73.9773321;
  // const s6LongitudeUpperRange = -73.9773321;

  const filterSquirrelsByColor = (color) => {
    return scatterAndRadarSquirrelData.filter(({ primary_fur_color }) => {
      primary_fur_color === color;
    });
  };

  // x is longitude key and y is latitude key
  const graySquirrelsData = filterSquirrelsByColor("Gray").reduce(
    (acc, cur) => {
      acc.push({ x: cur[x], y: cur[y] });
      return acc;
    },
    []
  );
  const cinnamonSquirrelsData = filterSquirrelsByColor("Cinnamon").reduce(
    (acc, cur) => {
      acc.push({ x: cur[x], y: cur[y] });
      return acc;
    },
    []
  );
  const blackSquirrelsData = filterSquirrelsByColor("Black").reduce(
    (acc, cur) => {
      acc.push({ x: cur[x], y: cur[y] });
      return acc;
    },
    []
  );

  const scatterData = {
    datasets: [
      {
        label: "Gray Squirrel Distribution",
        data: graySquirrelsData,
        backgroundColor: "gray",
      },
      {
        label: "Cinnamon Squirrel Distribution",
        data: cinnamonSquirrelsData,
        backgroundColor: "brown",
      },
      {
        label: "Black Squirrel Distribution",
        data: blackSquirrelsData,
        backgroundColor: "black",
      },
    ],
  };

  useEffect(() => {
    fetch(
      `${URL}?$query=SELECT%20x%2C%20y%2C%20unique_squirrel_id%2C%20date%2C%20primary_fur_color%20ORDER%20BY%20date%20DESC`
    )
      .then((res) => res.json())
      .then((data) => setScatterAndRadarSquirrelData(data));
  }, []);

  return (
    <div
      style={
        chartType === "Scatter" ? { display: "block" } : { display: "none" }
      }
    >
      <Scatter data={scatterData} />
      <img
        src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1714941996/oemyj1vgf0gmsa2et7wk.png"
        alt="Map of Central Park"
      />
    </div>
  );
};

export default ScatterChart;
