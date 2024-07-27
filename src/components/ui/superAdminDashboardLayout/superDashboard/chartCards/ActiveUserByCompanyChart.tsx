
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import style from './style.module.scss'
const monthData:any = [
  {
    org: "Org 1",
    orgRate: 480
  },
  {
    org: "Org 2",
    orgRate: 380
  },
  {
    org: "Org 3",
    orgRate: 420
  },
  {
    org: "Org 4",
    orgRate: 200
  },
  {
    org: "Org 5",
    orgRate: 450
  }
];

const YearData:any = [
  {
    org: "Org 1",
    orgRate: 1000
  },
  {
    org: "Org 2",
    orgRate: 850
  },
  {
    org: "Org 3",
    orgRate: 600
  },
  {
    org: "Org 4",
    orgRate: 550
  },
  {
    org: "Org 5",
    orgRate: 480
  }
];

const ActiveUserByCompanyChart = ({activeUservalue}:any)=> {
  return (
    <div className={style.graph_area_wrap}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activeUservalue === 'This Month' ? monthData : activeUservalue === 'This Year' ? YearData : null}
          syncId="ActiveUserByCompanyChart"
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
          <XAxis axisLine={false} dataKey="org" />
          <YAxis axisLine={false} />
          {/* <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/> */}
          <Tooltip cursor={{fill: 'transparent'}}/>
           
           <Bar name="Organization" barSize={12} dataKey="orgRate" stackId="a" fill="#00539F"  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActiveUserByCompanyChart
