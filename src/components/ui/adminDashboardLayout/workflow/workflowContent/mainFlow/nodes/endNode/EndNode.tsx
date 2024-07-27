import { useContext} from 'react'
import style from '../style.module.scss'
// import MessageIcon from "/assets/dashboard/main_dashboard/admin/workflow/message.svg"
import EndNodeIcon from "/assets/dashboard/main_dashboard/admin/workflow/nodeOption/left.svg"

import { Handle, Position } from 'reactflow'

import { ContextWorkflow } from '../../../../../../../../contexts/workflowContext';
import {useReactFlow} from 'reactflow';
import SettingsIcon from "/assets/dashboard/main_dashboard/admin/workflow/settings.svg"

const EndNode = ({ ...data }) => {
  // const [nodeOptionPop, setNodeOptionPop] = useState(false)
  // const [pointerPosition,setPointerPosition] = useState({x:100,y:100})
//   const nodeAddClick = (selectedItem:any)=>{
//     console.log("selected item",selectedItem);
//     data.data['pointer_position'] = pointerPosition;
//     data.data.onNodeAddClick(data,selectedItem);
//     setNodeOptionPop((el)=>!el);
// };
//   const onPointerClickHandler = (event:any) =>{
//     setPointerPosition({x:event.clientX,y:event.clientY})
//     setNodeOptionPop(!nodeOptionPop)
//   }

  // const settingsClickHandler = () =>{
  //   contextWorkflow.handleWorkflowSettings(data);
  //   contextWorkflow.handleWorkflowSettingsPop(true);
  //   data.data.onNodeSettingsClick(data);
  // }
  
  const rfInstance = useReactFlow();
  const settingsClickHandler = () =>{
    // data.data.onNodeSettingsClick(data);
   // setNodeOptionPop(!nodeOptionPop)
     data.data.toOpenSettings = true;
     rfInstance.setNodes((nodes)=>{
       nodes.map((nds)=>{
         if(nds.id == data.id)
         {
           nds.data.toOpenSettings = true; 
           contextWorkflow.handleWorkflowSettings(nds);
         }
       });
       return nodes;
     });
     rfInstance.fitView({includeHiddenNodes:false,padding:15});
   }
  const contextWorkflow = useContext(ContextWorkflow)
  
  return (
    <div className={`${style.node_area} ${style.end} ${(contextWorkflow.selectedNodeForSetting.id == data.id)?style.recent_node:null}`}>
        {/* <span className={style.message}><img src={MessageIcon} alt="" /></span> */}
        <div className={`${style.button} d-flex align-items-center`}>
            <img src={EndNodeIcon} alt="" />
            <span>{data.data.label}</span>
        </div>
      {contextWorkflow.selectedFlowRunningType == '' && <span className={`${style.settings_area} d-flex align-items-center justify-content-center`}>
        <span onClick={settingsClickHandler}><img src={SettingsIcon} alt="" /></span>
        {/* <span><img src={VerticalDotsIcon} alt="" /></span> */}
      </span>}
        {/* <Handle type="source" position={Position.Bottom} isConnectable={true} style={{cursor:"pointer"}}>
            <span className={style.add_node} onClick={onPointerClickHandler}><img src={AddNodeIcon} alt="" /></span>
             {nodeOptionPop ? <NodeOptionPopup onMenuSelect={nodeAddClick} /> :  null}
        </Handle> */}
        <Handle type="target" position={Position.Left} isConnectable={true} style={{ background: 'rgba(178, 193, 231, 1)',borderRadius:'5px',cursor:"pointer" }}></Handle>
    </div>
  )
}

export default EndNode