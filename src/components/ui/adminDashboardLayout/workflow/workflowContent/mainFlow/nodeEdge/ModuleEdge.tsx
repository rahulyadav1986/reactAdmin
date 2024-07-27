
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSimpleBezierPath } from 'reactflow';
import style from './style.module.scss';
const ModuleEdge = ({ sourceX, sourceY, sourcePosition, targetPosition, targetX, targetY,label }: EdgeProps) => {
  //const [label,setLabel] = useState(data.label);
  const [edgePath,labelX,labelY] = getSimpleBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  
  // useEffect(()=>{
  //   setLabel(data.label);
  // });
  return (
    <>
      <BaseEdge path={edgePath} style={{ stroke: 'rgba(178, 193, 231, 1)', strokeWidth: 3 }} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
        >
          <button className={style.edgebutton}>
            {label}
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default ModuleEdge;