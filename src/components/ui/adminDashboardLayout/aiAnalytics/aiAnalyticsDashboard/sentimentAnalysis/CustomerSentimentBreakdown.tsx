
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from './style.module.scss'
const data = [
  {
    month: "Jan",
    positive: 14,
    critical: 15,
    negative: 18
  },
  {
    month: "Feb",
    positive: 5,
    critical: 18,
    negative: 20
  },
  {
    month: "Mar",
    positive: 10,
    critical: 12,
    negative: 25
  },
  {
    month: "Apr",
    positive: 12,
    critical: 14,
    negative: 16
  },
  {
    month: "May",
    positive: 21,
    critical: 22,
    negative: 24
  },
  {
    month: "June",
    positive: 5,
    critical: 18,
    negative: 21
  },
  {
    month: "Jul",
    positive: 12,
    critical: 15,
    negative: 16
  },
  
];


const CustomerSentimentBreakdown = () => {
  return (
    <div className={`${style.graph_area_wrap} CustomerWordsFrequencyChart`}>
      <h6>Conversations Count</h6>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          syncId="customerSentimentbreakdown"
          margin={{
            top: 10,
            right: 15,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="1"
            stroke="#E5E7EB"
          />
          <XAxis axisLine={false} dataKey="month" />
          <YAxis axisLine={false}  />
          <Tooltip cursor={{fill: 'transparent'}}/>
          <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
           <Bar name="Positive" barSize={16} dataKey="positive" stackId="a" radius={[0, 0, 20 , 20]} fill="#76C94F"  />
           <Bar name="Critical" barSize={16} dataKey="positive" stackId="a" radius={[0, 0, 0 , 0]} fill="#FEA7A7"  />
           <Bar name="Negative" barSize={16} dataKey="negative" stackId="a" radius={[20, 20, 0 , 0]} fill="#FFD872"  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomerSentimentBreakdown