
import { Chart } from "react-google-charts";
import style from './style.module.scss'

export const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
];


export const options = {
    colorAxis: { colors: ["#D7D5A4", "#FF835C", "#D7D5A4"] },
    backgroundColor: "#fff",
    datalessRegionColor: "#87B9C9",
    defaultColor: "#FF835C",
};

const GeoGraphicalDistrubutionChart = ()=> {
  return (
    <div className={style.graph_area_wrap}>
       <Chart
            chartEvents={[
                {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
            />
    </div>
  );
}

export default GeoGraphicalDistrubutionChart
