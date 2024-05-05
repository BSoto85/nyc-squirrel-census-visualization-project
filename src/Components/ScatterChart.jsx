import { useEffect, useState } from "react";
// import { Scatter } from "react-chartjs-2";

const URL = import.meta.env.VITE_BASE_API_URL;

const ScatterChart = ({ chartType }) => {
  const [squirrelData, setSquirreData] = useState([]);

  // const section1LatitudeRegex =
  // const section1LongitudeRegex =

  // const section2LatitudeRegex =
  // const section2LongitudeRegex =

  // const section3LatitudeRegex =
  // const section3LongitudeRegex =

  // const section4LatitudeRegex =
  // const section4LongitudeRegex =

  // const section5LatitudeRegex =
  // const section5LongitudeRegex =

  // const section6LatitudeRegex =
  // const section6LongitudeRegex =

  const createSection = (latitude, longitude) => {};

  // useEffect(() => {
  //   fetch()
  //     `${URL}?$query=SELECT%20x%2C%20y%2C%20unique_squirrel_id%2C%20date%2C%20primary_fur_color%20ORDER%20BY%20date%20DESC`
  //     .then((res) => res.json())
  //     .then((data) => setSquirreData(data));
  // }, []);
  // console.log(squirrelData);

  return (
    <div
      style={
        chartType === "Scatter" ? { display: "block" } : { display: "none" }
      }
    >
      {/* <Scatter /> */}
      <img
        src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1714941996/oemyj1vgf0gmsa2et7wk.png"
        alt="Map of Central Park"
      />
    </div>
  );
};

export default ScatterChart;
