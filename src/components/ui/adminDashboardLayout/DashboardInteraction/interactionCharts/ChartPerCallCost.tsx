import ReactEcharts from "echarts-for-react"; 
import style from "./style.module.scss"
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: false,
    color: ['#FEB6AC', '#A6EAB5', '#A6B5EA', '#FFE5A4'],
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [30, 120],
        center: ['50%', '50%'],
        itemStyle: {
          borderRadius: 0,
        },
        labelLine: {
          show: false
        },
        
        data: [
          { value: 11, name: 'More than ₹11' },
          { value: 5, name: 'Under ₹5' },
          { value: 10, name: '₹5 - ₹11' },
          { value: 5, name: '₹2 - ₹5' },
        ]
      }
    ]
  };
const ChartPerCallCost = () => {
  return (
    <>
      <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Cost Per Call</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={`${style.graph_area_wrapper}`}>
        <ReactEcharts option={option} />
      </div>
    </>
  )
}

export default ChartPerCallCost