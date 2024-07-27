
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from './style.module.scss'
const data = [
  {
    workflow: "Week 2 - 8",
    uie: 80,
    te: 55,
    sf: 55,
  },
  {
    workflow: "Week 9 - 15",
    uie: 45,
    te: 60,
    sf: 15,
  },
  {
    workflow: "Week 16 - 22",
    uie: 65,
    te: 20,
    sf: 85,
  },
  {
    workflow: "Week 23 - 29",
    uie: 65,
    te: 20,
    sf: 75,
  },
  {
    workflow: "Week 30 - 5",
    uie: 60,
    te: 25,
    sf: 45,
  }
];

const ErrorRateGraph = ()=> {
  return (
    <div className={style.graph_area_wrap}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          syncId="Errorrate"
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
          <XAxis axisLine={false} dataKey="workflow" />
          <YAxis axisLine={false} />
          <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
          <Tooltip cursor={{fill: 'transparent'}}/>
           <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
           <Bar name="user input error" barSize={12} dataKey="uie" fill="#95402D"  />
           <Bar name="technical error" barSize={12} dataKey="te" fill="#E58A48"  />
           <Bar name="system failure" barSize={12} dataKey="sf" fill="#CCCF2E"  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ErrorRateGraph
