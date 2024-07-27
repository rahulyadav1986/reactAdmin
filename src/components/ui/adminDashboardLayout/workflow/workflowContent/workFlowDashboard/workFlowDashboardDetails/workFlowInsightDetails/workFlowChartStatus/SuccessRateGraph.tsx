
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from './style.module.scss'
const data = [
  {
    workflow: "Workflow 1",
    er: 30,
    sr: 90
  },
  {
    workflow: "Workflow 2",
    er: 15,
    sr: 80
  },
  {
    workflow: "Workflow 3",
    er: 42,
    sr: 50
  },
  {
    workflow: "Workflow 4",
    er: 10,
    sr: 50
  },
  {
    workflow: "Workflow 5",
    er: 20,
    sr: 60
  },
  {
    workflow: "Workflow 6",
    er: 25,
    sr: 70
  },
  {
    workflow: "Workflow 7",
    er: 15,
    sr: 25
  }
];

const SuccessRateGraph = ()=> {
  return (
    <div className={style.graph_area_wrap}>
      <h6>Success Rate</h6>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          syncId="SuccessRate"
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
           
           <Bar name="Error Rate" barSize={16} dataKey="er" stackId="a" fill="#FF9472" radius={[0, 0, 20 , 20]} />
           <Bar name="Success Rate" barSize={16} dataKey="sr" stackId="a"  fill="#55DC83" radius={[20,20,0,0]} />
          {/* <Line type="monotone" name="IVR Interactions" dataKey="im" stroke="#FE6C6C" fill="#FE6C6C" strokeWidth="3" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SuccessRateGraph
