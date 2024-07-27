
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from "./style.module.scss"
import VerticalDots from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/dotsVertical.svg"
const data = [
  {
    month: "10 Jan",
    conducted: 8000,
    notConducted: 1000,
  },
  {
    month: "12 Jan",
    conducted: 3000,
    notConducted: 500,
  },
  {
    month: "13 Jan",
    conducted: 9500,
    notConducted: 3500,
  },
  {
    month: "14 Jan",
    conducted: 5000,
    notConducted: 800,
  },
  {
    month: "15 Jan",
    conducted: 2000,
    notConducted: 1300,
  },
  {
    month: "16 Jan",
    conducted: 3500,
    notConducted: 1500,
  },
  {
    month: "17 Jan",
    conducted: 4000,
    notConducted: 2000,
  },
  {
    month: "18 Jan",
    conducted: 7000,
    notConducted: 4500,
  }
  
];


const ContactedChart = () => {
  return (
    <>
      <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
            <h2>Contacted vs Non Contacted </h2>
            <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={style.graph_area}>
          <ResponsiveContainer width="100%" height="100%">
              <BarChart
              data={data}
              syncId="dddd"
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
              <XAxis axisLine={false} dataKey="month" />
              <YAxis axisLine={false}  />
              <Tooltip cursor={{fill: 'transparent'}}/>
              <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
              <Bar name="Conducted" barSize={16} dataKey="conducted" stackId="a" radius={[20, 20, 0 , 0]} fill="#00539F"  />
              <Bar name="Not Conducted" barSize={16} dataKey="notConducted" stackId="b" radius={[20, 20, 0 , 0]} fill="#BB1865"  />
              </BarChart>
          </ResponsiveContainer>
      </div>
    </>
    
    
  )
}

export default ContactedChart