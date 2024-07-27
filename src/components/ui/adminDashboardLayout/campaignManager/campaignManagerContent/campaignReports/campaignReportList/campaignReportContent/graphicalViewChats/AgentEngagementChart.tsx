
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from "./style.module.scss"
import VerticalDots from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/dotsVertical.svg"
const data = [
  {
    agentName: "Agent 1",
    calls: 8000,
    conversion: 5000,
  },
  {
    agentName: "Agent 2",
    calls: 10000,
    conversion: 3000,
  },
  {
    agentName: "Agent 3",
    calls: 5000,
    conversion: 4000,
  },
  {
    agentName: "Agent 4",
    calls: 1500,
    conversion: 800,
  },
  {
    agentName: "Agent 5",
    calls: 2500,
    conversion: 1500,
  },
  {
    agentName: "Agent 6",
    calls: 5000,
    conversion: 800,
  },
  {
    agentName: "Agent 7",
    calls: 4000,
    conversion: 2000,
  },
  {
    agentName: "Agent 8",
    calls: 8000,
    conversion: 2000,
  }
  
];


const AgentEngagementChart = () => {
  return (
    <>
      <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
            <h2>Agents Engagement </h2>
            <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={style.graph_area}>
          <ResponsiveContainer width="100%" height="100%">
              <BarChart
              data={data}
              syncId="agentEngagement"
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
              <XAxis axisLine={false} dataKey="agentName" />
              <YAxis axisLine={false}  />
              <Tooltip cursor={{fill: 'transparent'}}/>
              <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
              <Bar name="Calls" barSize={16} dataKey="calls" stackId="a" radius={[20, 20, 0 , 0]} fill="#058DDA"  />
              <Bar name="Conversion" barSize={16} dataKey="conversion" stackId="b" radius={[20, 20, 0 , 0]} fill="#008344"  />
              </BarChart>
          </ResponsiveContainer>
      </div>
    </>
    
    
  )
}

export default AgentEngagementChart