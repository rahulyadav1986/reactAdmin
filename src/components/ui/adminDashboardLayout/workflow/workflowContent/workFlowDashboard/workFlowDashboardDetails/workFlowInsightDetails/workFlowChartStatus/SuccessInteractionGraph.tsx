
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import style from './style.module.scss'
const data = [
  {
    workflow: "Workflow 1",
    si: 90
  },
  {
    workflow: "Workflow 2",
    si: 30
  },
  {
    workflow: "Workflow 3",
    si: 50
  },
  {
    workflow: "Workflow 4",
    si: 20
  },
  {
    workflow: "Workflow 5",
    si: 70
  }
];

const SuccessInteractionGraph = ()=> {
  return (
    <div className={style.graph_area_wrap}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          syncId="successInteraction"
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
          {/* <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/> */}
          <Tooltip cursor={{fill: 'transparent'}}/>
           
           <Bar name="Successful Interactions" barSize={12} dataKey="si" stackId="a" fill="#ACBEE2"  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SuccessInteractionGraph
