import ReactEcharts from "echarts-for-react"; 
const OutboundChart = ()=> {  
  
const  option = {
    // legend: {
    //   top: 'bottom'
    // },
    color: ['#62c2f2', '#aa99fb', '#f4c760'],
    legend: false,
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Outbound Chart',
        type: 'pie',
        radius: [20, 70],
        center: ['50%', '50%'],
        roseType: 'area',
        height: "160",
        itemStyle: {
          borderRadius: 0
        },
        data: [
          { value: 118, name: 'Messaging' },
          { value: 150, name: 'Voice' },
          { value: 250, name: 'Email' },
        ]
      }
    ]
   
  };
return <ReactEcharts option={option} />;
} 
export default OutboundChart;