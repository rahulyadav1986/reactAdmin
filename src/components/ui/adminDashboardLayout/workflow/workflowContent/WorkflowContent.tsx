import { useContext, useEffect, useState } from "react"
import MainFlow from './mainFlow/MainFlow'
import style from './style.module.scss'
import ActiveFlow from './activeFlow/ActiveFlow'
import { ContextWorkflow } from "../../../../../contexts/workflowContext"
import WorkFlowDashboard from "./workFlowDashboard/WorkFlowDashboard"
import { createPortal } from "react-dom"
import ActiveWorkFlowStepPop from "./activeWorkFlowStepPop/ActiveWorkFlowStepPop"
import { ContextHeader } from "../../../../../contexts/headerContext"
const WorkflowContent = () => {
  const headerContext = useContext(ContextHeader);
  const contextWorkFlow = useContext(ContextWorkflow);
  console.log("dashboard", contextWorkFlow.sidebarTab, contextWorkFlow.finalWorkflowfromNewPop);
  const [flowData, setFlowData] = useState({ "name": "", "workflow": "", "workflowType": "" });
  useEffect(() => {
    console.log("header from campaign", headerContext.navigateFromCampaign);
    if (headerContext.navigateFromCampaign != "") {
      let campaignData = JSON.parse(headerContext.navigateFromCampaign);
      contextWorkFlow.setNetworkFlowType(campaignData.workflowType);
      //if (contextWorkFlow.selectedNetworkFlowName == "") {
        contextWorkFlow.setSelectedNetworkFlowName(campaignData.flowName);
    //  }
      contextWorkFlow.handleRunningWorkflowInfo(headerContext.navigateFromCampaign);
      headerContext.handleNavigateFromCampaign("");
    }
  }, [headerContext.navigateFromCampaign]);

  useEffect(() => {
    console.log("header from campaign", contextWorkFlow.runningWorkflowInfo);
    if (contextWorkFlow.runningWorkflowInfo != "") {
      let campaignData = JSON.parse(contextWorkFlow.runningWorkflowInfo);
      setFlowData(campaignData);
      contextWorkFlow.handleSidebarTab(1);
      contextWorkFlow.setSelectedNetworkFlowName(campaignData.flowName);
      contextWorkFlow.handleNewWorkflowPopBack(false);
      contextWorkFlow.handleFinalWorkflowfromNewPop(true);
      contextWorkFlow.handleWorkflowSettingsPop(false);
      contextWorkFlow.handleWorkflowSettings({} as Node);
     // contextWorkFlow.handleWorkFlowModuleTabList([], "reset");
      if(campaignData.workflow != "" && campaignData.workflow.nodes != undefined && campaignData.workflow.nodes.length > 0)
      {
        let modules:any = [];
        campaignData.workflow.nodes.map((item:any,i:number)=>{
          if(item.type == "Module" && item.data.moduleDetails != undefined && Object.keys(item.data.moduleDetails).length > 0)
          {
            console.log("tab page list add",item);
            modules.push({"name":item.data.label,"nodeInfo":item.data.moduleDetails});
           
           //contextWorkFlow.handleWorkFlowModuleTabList({"name":item.data.label,"nodeInfo":item.data.moduleDetails});
          }
          if(i == campaignData.workflow.nodes.length - 1)
          {
            contextWorkFlow.handleWorkFlowModuleTabList(modules,"renew");
          }
        });
      } 
      else
      {
        contextWorkFlow.handleWorkFlowModuleTabList([],"reset");
      }
      contextWorkFlow.handleWorkflowModuleTab({ name: 0, nodeInfo: "" });
      contextWorkFlow.handleCurrentRunningWorkFlow(contextWorkFlow.runningWorkflowInfo);
      contextWorkFlow.handleSelectedFlowRunningType("");
      contextWorkFlow.setFinalWorkflowfromNewPop(true);
    }
  }, [contextWorkFlow.runningWorkflowInfo]);
  return (
    <>
      <div className={style.work_flow_content_area}>
        {
          contextWorkFlow.sidebarTab === 0 ? <WorkFlowDashboard /> : null
        }

        {
          contextWorkFlow.sidebarTab === 1 ?
            <>
              {
                contextWorkFlow.finalWorkflowfromNewPop === true ? <MainFlow flowData={flowData} /> : <ActiveFlow />
              }
            </> : null
        }
      </div>
      {
        contextWorkFlow.finalWorkflowfromNewPop === true ? null :
          <>
            {
              contextWorkFlow.newWorkflowPop ?
                createPortal(<ActiveWorkFlowStepPop />, document.body) : null
            }
          </>

      }

    </>
  )
}

export default WorkflowContent