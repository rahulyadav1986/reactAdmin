
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from './style.module.scss'
const data = [
  {
    time: "10 am",
    im: 32,
  },
  {
    time: "11 am",
    im: 80,
  },
  {
    time: "12 noon",
    im: 120,
  },
  {
    time: "1 pm",
    im: 160,
  },
  {
    time: "2pm",
    im: 220,
  },
  {
    time: "3 pm",
    im: 350,
  },
  {
    time: "4 pm",
    im: 450,
  },
  {
    time: "5 pm",
    im: 500,
  }
];

const TimeInteractionMonitoringChart = ()=> {
  return (
    <div className={style.graph_area_wrap}>
      <h6># of interactions</h6>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          syncId="anyId"
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
          <XAxis axisLine={false} dataKey="time" />
          <YAxis axisLine={false} />
          <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
          <Tooltip cursor={{fill: 'transparent'}} />
          <Line type="monotone" name="IVR Interactions" dataKey="im" stroke="#FE6C6C" fill="#FE6C6C" strokeWidth="3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TimeInteractionMonitoringChart
