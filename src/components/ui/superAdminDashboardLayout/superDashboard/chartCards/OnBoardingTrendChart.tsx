
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";
import style from './style.module.scss'
const MonthData:any = [
  {
    month: "Jan",
    companies: 3,
    resellers: 6,
  },
  {
    month: "Feb",
    companies: 5,
    resellers: 10,
  },
  {
    month: "Mar",
    companies: 8,
    resellers: 12,
  },
  {
    month: "Apr",
    companies: 10,
    resellers: 14,
  },
  {
    month: "May",
    companies: 8,
    resellers: 18,
  },
  {
    month: "Jun",
    companies: 10,
    resellers: 20,
  },
  {
    month: "Jul",
    companies: 14,
    resellers: 22,
  },
  {
    month: "Aug",
    companies: 18,
    resellers: 26,
  },
  {
    month: "Sep",
    companies: 20,
    resellers: 28,
  },
  {
    month: "Oct",
    companies: 22,
    resellers: 30,
  },
  {
    month: "Nov",
    companies: 24,
    resellers: 34,
  },
  {
    month: "Dec",
    companies: 28,
    resellers: 36,
  }
];

const YearData:any = [
    {
      month: "Jan",
      companies: 40,
      resellers: 72,
    },
    {
      month: "Feb",
      companies: 50,
      resellers: 82,
    },
    {
      month: "Mar",
      companies: 65,
      resellers: 95,
    },
    {
      month: "Apr",
      companies: 70,
      resellers: 110,
    },
    {
      month: "May",
      companies: 72,
      resellers: 125,
    },
    {
      month: "Jun",
      companies: 78,
      resellers: 127,
    },
    {
      month: "Jul",
      companies: 95,
      resellers: 130,
    },
    {
      month: "Aug",
      companies: 110,
      resellers: 135,
    },
    {
      month: "Sep",
      companies: 115,
      resellers: 145,
    },
    {
      month: "Oct",
      companies: 118,
      resellers: 155,
    },
    {
      month: "Nov",
      companies: 120,
      resellers: 165,
    },
    {
      month: "Dec",
      companies: 130,
      resellers: 175,
    }
  ];

const OnBoardingTrendChart = ({onboardingTrendvalue}:any)=> {
  return (
    <div className={style.graph_area_wrap}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={onboardingTrendvalue == 'This Month' ? MonthData : onboardingTrendvalue == 'This Year' ? YearData : null}
          syncId="OnBoardingTrendChart"
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
          <YAxis axisLine={false} />
          <Legend layout="horizontal" verticalAlign="bottom" align="left" height={36}/>
          <Tooltip cursor={{fill: 'transparent'}} />
          <Line type="monotone" name="Companies" dataKey="companies" stroke="#FE6C6C" fill="#FE6C6C" strokeWidth="3" />
          <Line type="monotone" name="Resellers" dataKey="resellers" stroke="#B09FFF" fill="#B09FFF" strokeWidth="3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OnBoardingTrendChart
