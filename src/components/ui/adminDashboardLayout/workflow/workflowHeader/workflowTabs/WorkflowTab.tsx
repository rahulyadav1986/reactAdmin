import { useCallback, useContext, useEffect, useState } from "react"
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'
import style from './style.module.scss'
import { useReactFlow } from "reactflow";

const WorkflowTab = () => {
  const contextWorkflow = useContext(ContextWorkflow);
  const rInstance = useReactFlow();
  const [openedTab, setOpenedTab] = useState(contextWorkflow.workFlowModuleTabList);
  useEffect(() => {
    console.log("tab page list", contextWorkflow.workFlowModuleTabList);
    setOpenedTab(contextWorkflow.workFlowModuleTabList);
  }, [contextWorkflow.workFlowModuleTabList]);

  const tabChangeHandler = useCallback((tabInfo: any) => {
    //alert(contextWorkflow.currentRunningWorkFlow);
    console.log("tabInfo",tabInfo,contextWorkflow.workflowModuleTab);
    const currentRunningWorkFlow = JSON.parse(contextWorkflow.currentRunningWorkFlow);
    if (tabInfo.name == 0 || contextWorkflow.workflowModuleTab.name != 0) {
      const rfObj = rInstance.toObject();
      const currentTab:any = contextWorkflow.workflowModuleTab;
      console.log(currentTab,contextWorkflow.currentRunningWorkFlow);
      currentTab.nodeInfo.data.moduleDetails = rfObj;
     // const currentRunningWorkFlow = JSON.parse(contextWorkflow.currentRunningWorkFlow);
      console.log("currentRunning",currentRunningWorkFlow);
      currentRunningWorkFlow.workflow.nodes.map((el:any,index:any)=>{
        if(el.id == currentTab.nodeInfo.id)
        {
          currentRunningWorkFlow.workflow.nodes[index].data.moduleDetails = rfObj;
          contextWorkflow.handleCurrentRunningWorkFlow(JSON.stringify(currentRunningWorkFlow));
        }
      });
      
    }
    else {
         const rfObj = rInstance.toObject();
         //console.log("r obj",rfObj);
         currentRunningWorkFlow['workflow'] = rfObj;
         contextWorkflow.handleCurrentRunningWorkFlow(JSON.stringify(currentRunningWorkFlow));
    }
    contextWorkflow.handleWorkflowModuleTab(tabInfo);

  }, [contextWorkflow.workflowModuleTab,contextWorkflow.currentRunningWorkFlow,rInstance]);
  return (
    <ul className={`${style.work_flow_tab} d-flex align-items-center`}>
      <li className={`${contextWorkflow.workflowModuleTab.name === 0 ? style.active : null}`} onClick={() => tabChangeHandler({name:0,nodeInfo:""})}>{contextWorkflow.selectedNetworkFlowName != '' ? contextWorkflow.selectedNetworkFlowName : 'Main Flow'}</li>
      {
        openedTab.map((el) => {
          return (<li className={`${contextWorkflow.workflowModuleTab.name === el.name ? style.active : null}`} onClick={() => tabChangeHandler(el)}>{el.name}</li>);
        })
      }
      {/* <li className={`${contextWorkflow.workflowModuleTab === 1 ? style.active : null}`} onClick={()=>contextWorkflow.handleWorkflowModuleTab(1)}>Customer Screening</li>
        <li className={`${contextWorkflow.workflowModuleTab === 2 ? style.active : null}`} onClick={()=>contextWorkflow.handleWorkflowModuleTab(2)}>Customer Screening</li> */}
    </ul>
  )
}

export default WorkflowTab