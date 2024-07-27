import {useContext} from "react"
import style from './style.module.scss'
import { ContextWorkflow } from "../../../../../../contexts/workflowContext"
import ScratchIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/scratch.svg"
import BuildForMeIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/forme.svg"
import TemplateIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/template.svg"

const SecondStep = () => {
  const contextWorkFlow =  useContext(ContextWorkflow)
  return (
    <>
        <h1>How do you want to proceed for your {contextWorkFlow.selectedNetworkFlowType}?</h1>
        <div className={style.buid_process_card_wrap}>
            <div className={`${style.card} d-flex flex-column align-items-center`} onClick={()=>contextWorkFlow.handleNewWorkflowPopThirdStep(true)}>
                <div className={style.icon}><img src={ScratchIcon} alt="" /></div>
                <h4>Start from scratch</h4>
                <p>Start with a blank canvas and let your imagination flow</p>
            </div>
            <div className={`${style.card} d-flex flex-column align-items-center`}>
                <div className={style.icon}><img src={BuildForMeIcon} alt="" /></div>
                <h4>Built it for me</h4>
                <p>Tell what you need we will create it for you. This is in beta</p>
                <span className={style.beta}>Beta</span>
            </div>
            <div className={`${style.card} d-flex flex-column align-items-center`}>
                <div className={style.icon}><img src={TemplateIcon} alt="" /></div>
                <h4>Use a template</h4>
                <p>Choose . pre-made workflow and edit it as you want</p>
            </div>
        </div>
        <div className={`${style.back_button} align-items-center justify-content-center`} onClick={()=>contextWorkFlow.handleNewWorkflowPopSecondStepBack(false)}>Back</div>
    </>
  )
}

export default SecondStep