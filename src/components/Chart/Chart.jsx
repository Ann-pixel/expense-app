import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPt) => (
        <ChartBar
          value={dataPt.value}
          maxValue={totalMaximum}
          label={dataPt.label}
          key={dataPt.label}
        />
      ))}
    </div>
  );
};

export default Chart;
