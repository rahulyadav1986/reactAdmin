import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from './style.module.scss'
import styleParent from '../../style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
import { ImpressionConversionsChartData } from "./Data";

const ImpressionConversionsChart = () => {
  
  return (
    <>
      <div className={`${styleParent.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Impressions and Conversions</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={style.graph_area_wrapper}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
            layout="vertical"
            data={ImpressionConversionsChartData}
            margin={{
              top: 30,
              right: 20,
              bottom: 10,
              left: 50,
            }}
        >
          <CartesianGrid
            vertical={true}
            horizontal={false}
            strokeDasharray="1"
            stroke="#E5E7EB" />
            <Tooltip cursor={{fill: 'transparent'}}/>
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
          <Bar name="Impressions" barSize={13} dataKey="impressions" stackId="a" radius={[0, 20, 20 , 0]} fill="#3375b2" />
          <Bar name="Conversions" barSize={13} dataKey="conversions" stackId="b" radius={[0, 20, 20 , 0]} fill="#c94684" />
        </BarChart>
          </ResponsiveContainer>
      </div>
    </>
  )
}

export default ImpressionConversionsChart