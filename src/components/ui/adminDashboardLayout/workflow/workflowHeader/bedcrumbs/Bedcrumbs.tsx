
import { useContext, useEffect, useState } from 'react'
import style from './style.module.scss'
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'

const Bedcrumbs = () => {
  const contextWorkflow = useContext(ContextWorkflow);
  const [flowInfo,setFlowInfo] = useState({name:"",workflowType:"",workflow:""})
  useEffect(()=>{
    console.log("current running workflow",contextWorkflow.runningWorkflowInfo);
    if(contextWorkflow.runningWorkflowInfo != "")
    {
      let info = JSON.parse(contextWorkflow.runningWorkflowInfo);
      setFlowInfo(info);
    }
  },[contextWorkflow.runningWorkflowInfo]);
  return (
    <>
        <ul className={style.bedcrumb}>
            <li className={style.main} onClick={()=>contextWorkflow.handleSidebarTab(0)}>Workflows</li>
            <li className={style.main} onClick={()=>contextWorkflow.handleSidebarTab(1)}>New Workflow</li>
        </ul>
        <ul className={`${style.check_area} d-flex align-items-center`}>
            <li>draft</li>
            <li className={style.active}>{flowInfo.workflowType != ""?flowInfo.workflowType:"ivr"}</li>
        </ul>
    </>
  )
}

export default Bedcrumbs