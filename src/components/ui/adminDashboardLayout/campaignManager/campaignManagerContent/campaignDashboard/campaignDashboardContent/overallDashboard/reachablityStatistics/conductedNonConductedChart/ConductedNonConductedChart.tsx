import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from './style.module.scss'
import styleParent from '../../style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"

const ConductedNonConductedChart = () => {
  const data = [
    {
      campaignName: "Campaign 1",
      conducted: 8000,
      notConducted: 1000,
    },
    {
      campaignName: "Campaign 2",
      conducted: 3000,
      notConducted: 500,
    },
    {
      campaignName: "Campaign 3",
      conducted: 9500,
      notConducted: 3500,
    },
    {
      campaignName: "Campaign 4",
      conducted: 5000,
      notConducted: 800,
    },
    {
      campaignName: "Campaign 5",
      conducted: 2000,
      notConducted: 1300,
    },
    {
      campaignName: "Campaign 6",
      conducted: 3500,
      notConducted: 1500,
    },
    {
      campaignName: "Campaign 7",
      conducted: 4000,
      notConducted: 2000,
    },
    {
      campaignName: "Campaign 8",
      conducted: 7000,
      notConducted: 4500,
    }
    
  ];
  return (
    <>
      <div className={`${styleParent.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Impressions and Conversions</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={`${style.graph_area_wrapper} impressionChart`}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={data}
            syncId="Impressions and Conversions"
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
            <XAxis axisLine={false} dataKey="campaignName"  allowDataOverflow={true} angle={-22} textAnchor="middle" />
            <YAxis axisLine={false} ticks={[0,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]} domain={[0, 10000]}  />
            <Tooltip cursor={{fill: 'transparent'}}/>
            <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
            <Bar name="Conducted" barSize={13} dataKey="conducted" stackId="a" radius={[20, 20, 0 , 0]} fill="#3375b2"  />
            <Bar name="Not Conducted" barSize={13} dataKey="notConducted" stackId="b" radius={[20, 20, 0 , 0]} fill="#c94684"  />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default ConductedNonConductedChart