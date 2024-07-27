
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DistributionConversationIntentsChart =()=> {
  return (
    <ResponsiveContainer height="100%"  aspect={2}>
    <PieChart width={500} height={500} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
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
  );
}

export default DistributionConversationIntentsChart