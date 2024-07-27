import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import style from "./style.module.scss"
import VerticalDots from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/dotsVertical.svg"
const ContactDailedFrequencyChart = ()=> {  
const data = [
  { value: 12.50, name: 'First Time' },
  { value: 25.50, name: 'Second Time' },
  { value: 18, name: 'Third Time' },
  { value: 20.75, name: 'Fourth Time' },
  { value: 12, name: 'More than 4 times' },
];
const COLORS = ['#20C997', '#138EFF', '#3EBB03', '#5F63F2', '#FA8B0C'];
return (
    <>
        <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
            <h2>Contacts Dailed Frequency</h2>
            <span><img src={VerticalDots} alt="" /></span>
        </div>
        <div className={`${style.graph_area_wrapper} d-flex align-items-center justify-content-between`}>
          <ul className={`${style.details}`}>
              <li>
                  <span>
                      <span className={style.color_icon} style={{'backgroundColor': '#FE6AA5'}}></span>
                      <span>First Time</span>
                  </span>
                  <span><strong>11%</strong></span>
              </li>
              <li>
                  <span>
                      <span className={style.color_icon} style={{'backgroundColor': '#FE6AA5'}}></span>
                      <span>Second Time</span>
                  </span>
                  <span><strong>12%</strong></span>
              </li>
              <li>
                  <span>
                      <span className={style.color_icon} style={{'backgroundColor': '#138EFF'}}></span>
                      <span>Third Time</span>
                  </span>
                  <span><strong>20.75%</strong></span>
              </li>
              <li>
                  <span>
                      <span className={style.color_icon} style={{'backgroundColor': '#3EBB03'}}></span>
                      <span>Fourth Time</span>
                  </span>
                  <span><strong>18%</strong></span>
              </li>
              <li>
                  <span>
                      <span className={style.color_icon} style={{'backgroundColor': '#5F63F2'}}></span>
                      <span>More than 4 times</span>
                  </span>
                  <span><strong>25.50%</strong></span>
              </li>
              
          </ul>
          <div className={`${style.graph_area} graph_area_intent`}>
            <ResponsiveContainer height="100%"  aspect={2}>
              <PieChart  margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Pie
                    data={data}
                    innerRadius={50}
                    outerRadius={85}
                    paddingAngle={1}
                    startAngle={360}
                    endAngle={0}
                    animationDuration={500}
                    dataKey="value"
                  
                    
                  >
                    {data.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  
                </PieChart>
              </ResponsiveContainer>
          </div> 
      </div>
        
    </>
    
);
} 
export default ContactDailedFrequencyChart;