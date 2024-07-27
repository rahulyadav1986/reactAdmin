
import { BaseEdge, EdgeProps, getSmoothStepPath } from 'reactflow';
const NodeEdge = ({sourceX,sourceY,sourcePosition,targetPosition,targetX,targetY}:EdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  return (
    <BaseEdge path={edgePath} style={ { stroke: 'rgba(178, 193, 231, 1)', strokeWidth: 3 }} />
  );
}

export default NodeEdge;