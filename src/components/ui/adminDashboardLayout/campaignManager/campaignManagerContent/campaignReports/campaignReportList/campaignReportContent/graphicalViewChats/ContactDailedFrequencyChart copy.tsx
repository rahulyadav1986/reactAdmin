import ReactEcharts from "echarts-for-react"; 
import style from "./style.module.scss"
import VerticalDots from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/dotsVertical.svg"
const ContactDailedFrequencyChart = ()=> {  
  
// const option = {
//     // legend: {
//     //   left: 'left',
//     //   top: 'top',
//     //   orient: 'vertical',
//     //   show: true
//     // },
//     legend: {
//         top: 'bottom',
//         z: 2
//       },
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)",
//         show: false
//     },
   
//     color: ['#20C997', '#138EFF', '#3EBB03', '#5F63F2', '#FA8B0C'],
//     toolbox: {
//       show: false,
//       feature: {
//         mark: { show: true },
//         dataView: { show: true, readOnly: false },
//         restore: { show: true },
//         saveAsImage: { show: true }
//       }
      
//     },
//     series: [
//       {
//         name: 'Contacts Dailed Frequency',
//         type: 'pie',
//         radius: [45, 100],
//         center: ['50%', '50%'],
//         roseType: 'area',
//         height: "350",
//         itemStyle : {
//             normal : {
//                  label : {
//                     show: true, position: 'inner',
//                 },
//                 labelLine : {
//                     show : true
//                 }
//             },
            
//         },
//         data: [
//           { value: 12.50, name: 'First Time' },
//           { value: 25.50, name: 'Second Time' },
//           { value: 18, name: 'Third Time' },
//           { value: 20.75, name: 'Fourth Time' },
//           { value: 12, name: 'More than 4 times' },
//         ]
//       }
//     ]
   
//   };

const  option = {
    legend: {
        left: 'left',
        top: 'center',
        orient: 'vertical',
        show: true
    },
    color: ['#20C997', '#138EFF', '#3EBB03', '#5F63F2', '#FA8B0C'],
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
        name: 'Contacts Dailed Frequency',
        type: 'pie',
        radius: [60, 120],
        center: ['60%', '45%'],
        roseType: 'area',
        height: "350",
        itemStyle: {
          borderRadius: 0,
          normal:{
            label : {
                show: true, position: 'outer',
            },
          }
          
        },
        data: [
            { value: 12.50, name: 'First Time' },
            { value: 25.50, name: 'Second Time' },
            { value: 18, name: 'Third Time' },
            { value: 20.75, name: 'Fourth Time' },
            { value: 12, name: 'More than 4 times' }
        ]
      }
    ]
   
  };
return (
    <>
        <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
                <h2>Contacts Dailed Frequency</h2>
                <span><img src={VerticalDots} alt="" /></span>
        </div>
        <div className={style.graph_area}>
            <ReactEcharts option={option} />
        </div>
        
    </>
    
);
} 
export default ContactDailedFrequencyChart;