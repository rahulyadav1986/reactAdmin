import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import style from './style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"

const ChartCallVolumn = () => {
  const data = [
    {
        time: "8 am",
        volumn1: 25,
        volumn2: 16,
        volumn3: 16
    },
    {
        time: "10 am",
        volumn1: 14,
        volumn2: 18,
        volumn3: 5
    },
    {
        time: "12 am",
        volumn1: 18,
        volumn2: 10,
        volumn3: 24
    },
    {
        time: "2 pm",
        volumn1: 18,
        volumn2: 8,
        volumn3: 20
    },
    {
        time: "4 pm",
        volumn1: 12,
        volumn2: 15,
        volumn3: 8
    },
    {
        time: "4 pm",
        volumn1: 15,
        volumn2: 20,
        volumn3: 27
    },
    
    
  ];
  return (
    <>
      <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Call Volume</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={`${style.graph_area_wrapper} impressionChart`}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={data}
            syncId="Call Volume"
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
            <XAxis axisLine={false} dataKey="time"  allowDataOverflow={true}  />
            <YAxis axisLine={false} ticks={[0,5,10,15,20,25,30]} domain={[0, 27]}  />
            <Tooltip cursor={{fill: 'transparent'}}/>
            {/* <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/> */}
            <Bar name="Call Volumn 1" barSize={13} dataKey="volumn1" stackId="a"  fill="#2D956F"  />
            <Bar name="Call Volumn 2" barSize={13} dataKey="volumn2" stackId="b" fill="#E58A48"  />
            <Bar name="Call Volumn 3" barSize={13} dataKey="volumn3" stackId="c" fill="#CFC92E"  />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default ChartCallVolumn