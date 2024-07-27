import style from './style.module.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
const ChartAvarageSpeedAnsware = () => {
  const data = [
    {
      no: "1",
      ansTime: 1.5,
    },
    {
      no: "2",
      ansTime: .8,
    },
    {
      no: "3",
      ansTime: 1.2,
    },
    {
      no: "4",
      ansTime: .6,
    },
    {
      no: "5",
      ansTime: 1.6,
    },
    {
      no: "6",
      ansTime: 2,
    },
    {
      no: "7",
      ansTime: 1.4,
    },
    {
      no: "8",
      ansTime: 1.7,
    },
    {
      no: "9",
      ansTime: 1.3,
    },
    {
      no: "10",
      ansTime: .5,
    },
    {
      no: "11",
      ansTime: .9,
    },
    {
      no: "12",
      ansTime: 1.9,
    }
    
    
    
  ];
  return (
    <>
      <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Average Speed of Answer</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={`${style.graph_area_wrapper} ${style.big}`}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={data}
            syncId="Average Speed of Answer"
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
            <XAxis axisLine={false} dataKey="no"  allowDataOverflow={true}  />
            <YAxis axisLine={false} ticks={[0,0.5,1,1.5,2]} domain={[0, 2]}  />
            <Tooltip cursor={{fill: 'transparent'}}/>
            <Bar name="Speed of Answer" barSize={13} dataKey="ansTime" stackId="a"  fill="#C61764"  />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default ChartAvarageSpeedAnsware