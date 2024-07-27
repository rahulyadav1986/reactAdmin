import style from './style.module.scss'
import shareAvatarOne from "/assets/dashboard/main_dashboard/admin/s1.png"
import shareAvatarTwo from "/assets/dashboard/main_dashboard/admin/s2.png"
import ExchangeIcon from "/assets/dashboard/main_dashboard/admin/exchange.svg"
import NotificationIcon from "/assets/dashboard/main_dashboard/admin/noti.svg"
import SaveIcon from "/assets/dashboard/main_dashboard/admin/save.svg"
import { useReactFlow } from 'reactflow';
import { useContext } from 'react'
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'
import { ContextHeader } from '../../../../../../contexts/headerContext'

const ActionIcons = () => {
  const rfInstance = useReactFlow();
  const contextWorkFlow = useContext(ContextWorkflow);
  const contextHeader = useContext(ContextHeader);
  const saveBtnHandler = ()=>{
    const flowobj = rfInstance.toObject();
    console.log("saved flow",flowobj);
    let savedFlows:any = localStorage.getItem("savedFlows");
    console.log("saved data",savedFlows,contextWorkFlow.runningWorkflowInfo,contextWorkFlow.selectedNetworkFlowType,contextWorkFlow.selectedNetworkFlowName);
    let runningWorkflowObject = (contextWorkFlow.runningWorkflowInfo != null)?JSON.parse(contextWorkFlow.runningWorkflowInfo):"";
    let type = (contextWorkFlow.selectedNetworkFlowType != null && contextWorkFlow.selectedNetworkFlowType == 'Modules')?contextWorkFlow.selectedNetworkFlowType:((runningWorkflowObject.workflowType == "Campaigns")?"Campaigns":'Workflow');
    if(savedFlows == null)
    {
      let obj:any = {};
      obj[type] = {};
      if(type == "Campaigns")
      {
        if(runningWorkflowObject.id == undefined)
        {
          runningWorkflowObject.id = 1;
        }
        runningWorkflowObject['workflow'] = flowobj;
        obj[type] = [runningWorkflowObject];
        contextHeader.handleNavigateFromCampaign(JSON.stringify(runningWorkflowObject));
        savedFlows = obj;
      }
      else
      {
        obj[type][contextWorkFlow.selectedNetworkFlowName] = runningWorkflowObject;
        obj[type][contextWorkFlow.selectedNetworkFlowName]['workflow'] = flowobj;
        savedFlows = obj;
      }
      localStorage.setItem("savedFlows",JSON.stringify(savedFlows));
    }
    else
    {
      savedFlows = JSON.parse(savedFlows);
      if(contextWorkFlow.workflowModuleTab.name == 0)
      {
        if(savedFlows[type] != undefined)
        {
          if(type == "Campaigns")
          {
            if(runningWorkflowObject.id == undefined)
            {
              runningWorkflowObject.id = savedFlows[type].length+1;
              runningWorkflowObject.workflow = flowobj;
              savedFlows[type].push(runningWorkflowObject);
              contextHeader.handleNavigateFromCampaign(JSON.stringify(runningWorkflowObject));
            }
            else
            {
              savedFlows[type].map((el:any,index:number)=>{
                if(el.id == runningWorkflowObject.id)
                {
                  runningWorkflowObject.workflow = flowobj;
                  savedFlows[type][index]['workflow'] = flowobj;
                  contextHeader.handleNavigateFromCampaign(JSON.stringify(runningWorkflowObject));
                }
              });
            }
          }
          else
          {
            runningWorkflowObject.workflow = flowobj;
            savedFlows[type][contextWorkFlow.selectedNetworkFlowName] = runningWorkflowObject;
          }
        }
        else
        {
          if(type == "Campaigns")
          {
            if(runningWorkflowObject.id == undefined)
            {
              runningWorkflowObject.id = 1;
            }
            runningWorkflowObject['workflow'] = flowobj;
            contextHeader.handleNavigateFromCampaign(JSON.stringify(runningWorkflowObject));
            savedFlows[type] = [runningWorkflowObject]
          }
          else
          {
            savedFlows[type] = {};
            runningWorkflowObject['workflow'] = flowobj;
            savedFlows[type][contextWorkFlow.selectedNetworkFlowName] = runningWorkflowObject;
          }
        }
        localStorage.setItem("savedFlows",JSON.stringify(savedFlows));
      }
      else
      {
        if(savedFlows['Modules'] != undefined && savedFlows['Modules'][contextWorkFlow.workflowModuleTab.name] != undefined)
        {
          savedFlows['Modules'][contextWorkFlow.workflowModuleTab.name]['workflow'] = flowobj;
          console.log(savedFlows);
          localStorage.setItem("savedFlows",JSON.stringify(savedFlows));
        }
      }
    }
    
  };
  return (
    <ul className={`${style.right} d-flex align-items-center`}>
        <li className={`${style.share_wrap} d-flex align-items-center`}>
            <img src={shareAvatarOne} alt="" />
            <img src={shareAvatarTwo} alt="" />
        </li>
        <li><img src={ExchangeIcon} alt="" /></li>
        <li><img src={NotificationIcon} alt="" /></li>
        <li onClick={saveBtnHandler} style={{cursor:'pointer'}}><img src={SaveIcon} alt="" /></li>
    </ul>
  )
}

export default ActionIcons