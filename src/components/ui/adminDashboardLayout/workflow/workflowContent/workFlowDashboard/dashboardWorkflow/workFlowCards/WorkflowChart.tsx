
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
const WorkflowChart =({...props})=> {
  console.log(props.datavalue)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={props.datavalue}
          innerRadius={50}
          outerRadius={85}
          paddingAngle={1}
          startAngle={360}
          endAngle={0}
          animationDuration={500}
          dataKey="value"
        >
          {props.datavalue.map((_entry:any, index:any) => (
            <Cell key={`cell-${index}`} fill={_entry.color2} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default WorkflowChart
