
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import style from './style.module.scss'
const data = [
  {
    name: "Support",
    sa: 22
  },
  {
    name: "Issue",
    sa: 8
  },
  {
    name: "Problem",
    sa: 26
  },
  {
    name: "Resolve",
    sa: 7
  },
  {
    name: "Assastance",
    sa: 5
  },
  {
    name: "Upgrade",
    sa: 19
  },
  {
    name: "Cancel",
    sa: 13
  },
  {
    name: "Feedback",
    sa: 23
  },
  {
    name: "Unhappy",
    sa: 14
  },
  {
    name: "Polite",
    sa: 17
  },
  
];

const CustomerWordsFrequencyChart = ()=> {
  return (
    <div className={`${style.graph_area_wrap} CustomerWordsFrequencyChart`}>
      <h6>Frequency count</h6>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          syncId="customerWordsFrequency"
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
          <XAxis axisLine={false} dataKey="name" allowDataOverflow={true} angle={-22} textAnchor="middle" />
          <YAxis axisLine={false} ticks={[0,5,10,15,20,25,30]} domain={[0, 30]} />
          <Tooltip cursor={{fill: 'transparent'}}/>
           <Bar name="Customer Words Frequency" barSize={12} dataKey="sa" stackId="a" radius={[20, 20, 20 , 20]} fill="#015EB0 "  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomerWordsFrequencyChart
