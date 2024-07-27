import ReactEcharts from "echarts-for-react"; 
const CampaignAnalyticsChart = ({CampaignStatisticsData}:any)=> {  
  

return <ReactEcharts option={CampaignStatisticsData.chartDataOption} />;
} 
export default CampaignAnalyticsChart;