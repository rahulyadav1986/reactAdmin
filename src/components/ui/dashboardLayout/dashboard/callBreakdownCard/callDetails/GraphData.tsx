import style from './style.module.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GraphDetailsData } from './Data'
const GraphData = () => {
  return (
    <div className={style.graph_area_wrap}>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={GraphDetailsData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="top" align="right" height={36}/>
                <Line type="monotone" dataKey="total" stroke="#4A4DE6"  />
                <Line type="monotone" dataKey="missed" stroke="#FF5558"  />
                <Line type="monotone" dataKey="answered" stroke="#55E0FF"  />
                <Line type="monotone" dataKey="transferred" stroke="#FFB155"  />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default GraphData