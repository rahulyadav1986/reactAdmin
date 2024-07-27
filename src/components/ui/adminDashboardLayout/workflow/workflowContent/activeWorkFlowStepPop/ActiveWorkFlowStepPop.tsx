import {useContext} from "react"
import style from './style.module.scss'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/cross.svg"
import { ContextWorkflow } from "../../../../../../contexts/workflowContext"
import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep"
import ThirdStep from "./ThirdStep"

const ActiveWorkFlowStepPop = () => {
  const contextWorkFlow =  useContext(ContextWorkflow)
  return (
    <div className={`${style.active_workflow_step_pop_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>contextWorkFlow.handleNewWorkflowPopBack(false)}></div>
        <div className={style.main_pop_wrap}>
          <img src={CrossIcon} className={style.crossicon} alt="" onClick={()=>contextWorkFlow.handleNewWorkflowPopBack(false)} />
          {
            contextWorkFlow.newWorkflowPopFirstStep ? <FirstStep /> : null
          }
          {
            contextWorkFlow.newWorkflowPopSecondStep ? <SecondStep /> : null
          }
          {
            contextWorkFlow.newWorkflowPopThirdStep ? <ThirdStep />: null
          }
          <ul className={`${style.dot_area} d-flex align-items-center`}>
            <li className={`${contextWorkFlow.newWorkflowPopFirstStep ? style.active : null}`}></li>
            <li className={`${contextWorkFlow.newWorkflowPopSecondStep ? style.active : null}`}></li>
            <li className={`${contextWorkFlow.newWorkflowPopThirdStep ? style.active : null}`}></li>
          </ul>
        </div>
    </div>
  )
}

export default ActiveWorkFlowStepPop