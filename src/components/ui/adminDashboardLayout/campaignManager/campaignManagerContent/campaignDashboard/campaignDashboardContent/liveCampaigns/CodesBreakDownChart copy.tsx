import ReactEcharts from "echarts-for-react"; 
const CodesBreakDownChart = ()=> { 
const datas = [
    [
        { name: 'Invalid Phone Numbers', value: 23 },
        { name: 'Do Not Disturb Preferences', value: 35 },
        { name: 'Opted Out of Communications', value: 12 },
        { name: 'Language Barrier', value: 12 },
        { name: 'Technical Issues', value: 5 },
        { name: 'Out of Service Area', value: 4 },
        { name: 'Other Reasons', value: 9 }
    ],
    
];
const colorPalette = ['#8B6057', '#8B6057C4', '#8B605785', '#8B60575C', '#C9BAAC', '#F7D3C7', '#F7E4C7'];
const option = {
    title: {
      text: '',
      left: '',
      textStyle: {
        color: '#999',
        fontWeight: 'normal',
        fontSize: 14
      },
      
    },
    series: datas.map(function (data, idx) {
      var top = idx * 33.3;
      return {
        type: 'pie',
        radius: [75, 100],
        top: top + '%',
        height: '100%',
        left: 'center',
        width: 600,
        color: colorPalette,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 0
        },
        label: {
          alignTo: 'edge',
          formatter: '{name|{b}}\n{time|{c} %}',
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: {
            time: {
              fontSize: 12,
              color: '#4E545F',
              fontWeight: '700'
            }
          }
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80
        },
       
        data: data
      };
    })
  };
return <ReactEcharts option={option} />;
} 
export default CodesBreakDownChart;