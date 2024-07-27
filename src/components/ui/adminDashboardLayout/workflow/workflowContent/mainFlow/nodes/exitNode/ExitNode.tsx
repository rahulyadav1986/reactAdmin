
import style from '../style.module.scss'
import ExitNodeIcon from "/assets/dashboard/main_dashboard/admin/workflow/nodeOption/down.svg";
import { Handle, Position } from 'reactflow'
//import DeleteIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/dustbin.svg"
// import RestrictIcon from "/assets/dashboard/main_dashboard/admin/restrict.svg";
// import CloseIcon from "/assets/dashboard/main_dashboard/admin/close.svg";
import { useContext } from 'react';
import {useReactFlow} from 'reactflow';
import { ContextWorkflow } from '../../../../../../../../contexts/workflowContext';
import SettingsIcon from "/assets/dashboard/main_dashboard/admin/workflow/settings.svg"

const ExitNode = ({ ...data }) => {

   const contextWorkflow = useContext(ContextWorkflow);
 // const [confirmDeletePop, setConfirmDeletePop] = useState(false);
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
  // const handleConfirmDeletePop = (id: any) => {
  //   setConfirmDeletePop(id)
  // }

  // const deleteClickHandler = useCallback(() => {
  //   //console.log("selected node", selectedNode, contextWorkflow.selectedNodeForSetting);
  //   // if (contextWorkflow.selectedNodeForSetting.data.moduleName != undefined) {
  //   //   let selectedTab: any = contextWorkflow.workFlowModuleTabList.filter((el) => el.nodeInfo.id == contextWorkflow.selectedNodeForSetting.id);
  //   //   if (selectedTab.length > 0) {
  //   //     contextWorkflow.handleWorkFlowModuleTabList(selectedTab[0], "delete");
  //   //   }
  //   // }
  //   const currentNode = reactFlow.getNode(data.id) as Node;
  //   const incomers = getIncomers(currentNode, reactFlow.getNodes(), reactFlow.getEdges());
  //   const outgoers = getOutgoers(currentNode, reactFlow.getNodes(), reactFlow.getEdges());
  //   // const connectedEdges = getConnectedEdges()
  //   console.log(incomers, outgoers);
  //   reactFlow.deleteElements({ nodes: [...outgoers, currentNode], edges: getConnectedEdges([currentNode], reactFlow.getEdges()) });
  //   contextWorkflow.handleWorkflowSettingsPop(false);
  //   if (incomers[0] != undefined) {
  //     reactFlow.setNodes((nodes) => {
  //       nodes.map((el) => {
  //         if (el.id == incomers[0].id) {
  //           el.data.childNodeCount = 0;
  //         }
  //       })
  //       return nodes;
  //     })
  //   }
  //   //setNo
  // }, [data]);
  return (
    <>
      <div className={`${style.node_area} ${style.exit}`}>
        {/* <span className={style.message}><img src={MessageIcon} alt="" /></span> */}
        <div className={`${style.button} d-flex align-items-center`}>
          <img src={ExitNodeIcon} alt="" />
          <span>{data.data.label}</span>
        </div>
        {contextWorkflow.selectedFlowRunningType == '' && <span className={`${style.settings_area} d-flex align-items-center justify-content-center`}>
          <span onClick={settingsClickHandler}><img src={SettingsIcon} alt="" /></span>
          {/* <span><img src={DeleteIcon} alt="" onClick={()=>handleConfirmDeletePop(true)}/></span> */}
        </span>}
        {/* <Handle type="source" position={Position.Bottom} isConnectable={true}>
            <span className={style.add_node} onClick={onPointerClickHandler}><img src={AddNodeIcon} alt="" /></span>
             {nodeOptionPop ? <NodeOptionPopup onMenuSelect={nodeAddClick} /> :  null}
        </Handle> */}
        <Handle type="target" position={Position.Left} isConnectable={true} style={{ background: 'rgba(178, 193, 231, 1)', borderRadius: '5px' }}></Handle>
      </div>
      {/* {
        confirmDeletePop ?
          <div className={style.delete_node_popup_wrapper}>
            <div className="overlay"></div>
            <div className={style.main_wrap}>
              <img src={CloseIcon} className={style.close} onClick={() => handleConfirmDeletePop(false)} alt="" />
              <span><img src={RestrictIcon} alt="" /></span>
              <h2>Delete Node</h2>
              <p>Are you sure you would like to delete the node ?</p>
              <div className={style.button_wrap}>
                <div className={`${style.button} ${style.yes}`} onClick={deleteClickHandler}>Yes Delete Node</div>
                <div className={`${style.button} ${style.cancle}`} onClick={() => handleConfirmDeletePop(false)}>Cancel</div>
              </div>
            </div>
          </div> : null
      } */}
    </>
  )
}

export default ExitNode