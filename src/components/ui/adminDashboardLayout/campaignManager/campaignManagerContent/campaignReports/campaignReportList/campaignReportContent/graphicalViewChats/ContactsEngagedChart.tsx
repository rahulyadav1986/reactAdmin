
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from './style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/dotsVertical.svg"
const data = [
  {
    time: "24 Jan",
    im: 32,
  },
  {
    time: "25 Jan",
    im: 80,
  },
  {
    time: "26 Jan",
    im: 120,
  },
  {
    time: "27 Jan",
    im: 160,
  },
  {
    time: "28 Jan",
    im: 220,
  },
  {
    time: "29 Jan",
    im: 350,
  },
  {
    time: "30 Jan",
    im: 450,
  },
  {
    time: "31 Jan",
    im: 500,
  }
];

const ContactsEngagedChart = ()=> {
  return (
    <>
        <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
            <h2>Contacts Engaged</h2>
            <span><img src={VerticalDots} alt="" /></span>
        </div>
        <div className={style.graph_area}>
            <div className={style.graph_area_wrap}>
                <h6>Contacts</h6>
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
                    <Line type="monotone" name="Contacts" dataKey="im" stroke="#FE6C6C" fill="#FE6C6C" strokeWidth="3" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </>
    
  );
}

export default ContactsEngagedChart
