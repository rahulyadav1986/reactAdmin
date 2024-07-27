import {useState,useContext,useEffect, useRef} from 'react'
import style from './style.module.scss'
import { ToolBox } from './toolbox/ToolBox'
import StartWorkFlowIcon from "/assets/dashboard/main_dashboard/admin/workflow/start_here.svg"
import MainWorkFlow from './MainWorkFlow'
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'
const MainFlow = (props:any) => {
  const [startNode, setStartNode] = useState(false)
  const contextWorkFlow = useContext(ContextWorkflow);
  console.log("main flow props",props,contextWorkFlow.selectedNetworkFlowType);
  const ref = useRef(null);
  const handleStartNode = (id:any)=>{
    setStartNode(id)
  }
  useEffect(()=>{
    contextWorkFlow.handleWorkflowSettingsPop(false);
    if(props.savedFlow != undefined)
    {
      console.log("props savedflow",props.savedFlow);
      //contextWorkFlow.handleCurrentRunningWorkFlow(JSON.stringify(props.savedFlow));
      contextWorkFlow.handleSelectedFlowRunningType("live");
      handleStartNode(true);
    }
    else if(contextWorkFlow.selectedNetworkFlowType == 'Modules' || contextWorkFlow.selectedNetworkFlowType == "Campaigns")
    {
      //alert(1);
      handleStartNode(true);
    }
  },[contextWorkFlow.selectedNetworkFlowType]);
  useEffect(()=>{
    return () => {
    // Anything in here is fired on component unmount.
      if(ref.current == null)
      {
        contextWorkFlow.setFinalWorkflowfromNewPop(false);
        contextWorkFlow.handleRunningWorkflowInfo("");
      }
      
  }
  },[]);
  const BGStyle:any = {'backgroundImage': 'url(/assets/dashboard/main_dashboard/admin/workflow/swatch.svg)'}

  return (
    <div className={style.main_flow_wrapper} style={startNode ? null : BGStyle} ref={ref}>
        <ToolBox />
       {  <div className={style.flow_area_wrapper} id="flowRoot">
            <div className={`${style.start_wrapper} d-flex align-items-center`}>
              {startNode ? null : <div className={style.start_flow} onClick={()=>handleStartNode(true)}><img src={StartWorkFlowIcon} alt="" /></div>}
            </div>
            {startNode ? <MainWorkFlow type={props.savedFlow != undefined?true:false} flowData={props.flowData}/> : null}
        </div>}        
    </div>
  )
}

export default MainFlow;