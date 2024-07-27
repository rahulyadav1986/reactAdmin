import {useContext} from 'react'
import style from './style.module.scss';
import { ContextAdminDashboard } from '../../../../../contexts/adminDashboardContext';
import { ContextWorkflow } from '../../../../../contexts/workflowContext';
const BottomContent = () => {
  const contextDashboard = useContext(ContextAdminDashboard)
  const contextWorkflowSidebarTab = useContext(ContextWorkflow)
  return (
    <>
        {
            contextDashboard.buildBotPopFirstStep === true ? 
            <>
                <p>Let’s create your first workflow - on Zuqo, we call it as <strong>Journey</strong> </p>
                    <div className={`${style.button_area_wrapper} d-flex align-items-center`}>
                        <div className={`${style.button} ${style.primary_button}`} onClick={()=>contextDashboard.handleBuildBotPopFirstStep(false)}>Let’s Go</div>
                        <div className={`${style.button} ${style.white_button}`}>Learn more</div>
                    </div>
                </> 
            : 
            contextDashboard.buildBotPopSecondStep === true ? 
            <>
                <h2>Start from scratch or template</h2>
                <p>👉  Studio let you automate your work: build them. It’ll change the way you work!
                    We’ve found that it’s best to start small, turning a single task into your first Journey.</p>
                <div className={`${style.button_area_wrapper} d-flex align-items-center justify-content-center`}>
                    <div className={`${style.button} ${style.white_button}`} onClick={contextDashboard.handleBackBuildPopfromSecond}>Back</div>
                    <div className={`${style.button} ${style.primary_button}`} onClick={()=>contextDashboard.handleBuildBotPopThirdStep(true)}>Continue</div>
                </div>
                <div className={style.no}>1/4</div>
            </> 
            : 
            contextDashboard.buildBotPopThirdStep === true ? 
            <>
                <h2>Use Modules</h2>
                <p>👉 Modules are pre defined set of workflows for you to save time. This text needs to be updated. Need Sam’s help in defining a story </p>
                <div className={`${style.button_area_wrapper} d-flex align-items-center justify-content-center`}>
                    <div className={`${style.button} ${style.white_button}`} onClick={contextDashboard.handleBackBuildPopfromThird}>Back</div>
                    <div className={`${style.button} ${style.primary_button}`} onClick={()=>contextDashboard.handleBuildBotPopFourthStep(true)}>Continue</div>
                </div>
                <div className={style.no}>2/4</div>
            </> 
            : 
            contextDashboard.buildBotPopFourthStep === true ? 
            <>
                <h2>Test Your Journey</h2>
                <p>👉 Journey lorem are pre defined set of workflows for you to save time. This text needs to be updated. Need Sam’s help in defining a story</p>
                <div className={`${style.button_area_wrapper} d-flex align-items-center justify-content-center`}>
                    <div className={`${style.button} ${style.white_button}`} onClick={contextDashboard.handleBackBuildPopfromFourth}>Back</div>
                    <div className={`${style.button} ${style.primary_button}`} onClick={()=>contextDashboard.handleBuildBotPopFifthStep(true)}>Continue</div>
                </div>
                <div className={style.no}>3/4</div>
            </>
            : 
            contextDashboard.buildBotPopFifthStep === true ? 
            <>
                <h2>Share & Collaborate</h2>
                <p>👉 Journey lorem are pre defined set of workflows for you to save time. This text needs to be updated. Need Sam’s help in defining a story</p>
                <div className={`${style.button_area_wrapper} d-flex align-items-center justify-content-center`}>
                    <div className={`${style.button} ${style.white_button}`} onClick={contextDashboard.handleBackBuildPopfromFifth}>Back</div>
                    <div className={`${style.button} ${style.primary_button}`} onClick={()=>{
                        contextWorkflowSidebarTab.handleFinalWorkflowfromNewPop(false);
                        contextWorkflowSidebarTab.handleRunningWorkflowInfo("");
                        setTimeout(()=>{
                            contextWorkflowSidebarTab.handleSidebarTab(1);
                        },10);
                        }}>Get Started</div>
                </div>
                <div className={style.no}>4/4</div>
            </> 
            : 
            null
        }
    </>
  )
}

export default BottomContent