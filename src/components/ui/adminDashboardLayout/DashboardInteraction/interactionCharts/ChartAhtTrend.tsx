import ReactEcharts from "echarts-for-react";
import style from './style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"

// import echarts from "echarts/types/dist/echarts";


const ChartAhtTrend = () => {
let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [[base, Math.random() * 300]];
for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay));
  data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}

const option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt: any[]) {
          return [pt[0], '10%'];
        }
    },
    title: false,
    toolbox: false,
    xAxis: {
        type: 'time',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 20
        },
        {
          start: 0,
          end: 20
        }
    ],
    series: [
        {
          name: 'Fake Data',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data,
          height: "415",
        }
    ]
};
  return (
    <>
      <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
        <h3>AHT Trend</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={`${style.graph_area_wrapper} ${style.big}`}>
        <ReactEcharts option={option} />
      </div>
    </>
  )
}

export default ChartAhtTrend