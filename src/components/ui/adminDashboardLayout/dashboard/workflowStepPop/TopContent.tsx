import {useContext} from 'react'
import style from './style.module.scss';
import ZuqoWorkflowStudioImage from '/assets/dashboard/main_dashboard/admin/workflowPop/zuqo_workflow_bg.png';
import BotVideo from "/assets/dashboard/main_dashboard/admin/workflowPop/botVideo.mp4"
import ModulesBG from "/assets/dashboard/main_dashboard/admin/workflowPop/modulesBG.gif"
import JourneyBG from "/assets/dashboard/main_dashboard/admin/workflowPop/journeyBG.png"
import CollaborateBG from "/assets/dashboard/main_dashboard/admin/workflowPop/collaborateBG.gif"
import { ContextAdminDashboard } from '../../../../../contexts/adminDashboardContext';
const TopContent = () => {
  const contextDashboard = useContext(ContextAdminDashboard)
  return (
    <>
        {
            contextDashboard.buildBotPopFirstStep === true ?
            <>
                <img src={ZuqoWorkflowStudioImage} alt="" />
                <div className={style.title_area}>
                <h2>
                    <span>Welcome to</span> Zuqo Workflow Studio
                </h2>
                </div>
            </>                    
            : 
            contextDashboard.buildBotPopSecondStep === true ?
            <>
                <video className={style.video} src={BotVideo} autoPlay loop data-object-fit="cover"></video>
                <div className={`${style.title_area} ${style.steps} ${style.video}`}>
                <p>Real animated feature explanation comes here</p>
                </div>
            </> 
            :
            contextDashboard.buildBotPopThirdStep === true ?
            <>
                <img src={ModulesBG} className={style.steps} alt="" />
                <div className={`${style.title_area} ${style.steps}`}>
                <p>Real animated feature explanation comes here</p>
                </div>
            </>                    
            : 
            contextDashboard.buildBotPopFourthStep === true ?
            <>
                <img src={JourneyBG} className={style.steps} alt="" />
                <div className={`${style.title_area} ${style.steps}`}>
                <p>Real animated feature explanation comes here</p>
                </div>
            </>                    
            : 
            contextDashboard.buildBotPopFifthStep === true ?
            <>
                <img src={CollaborateBG} className={style.steps} alt="" />
                <div className={`${style.title_area} ${style.steps}`}>
                <p>Real animated feature explanation comes here</p>
                </div>
            </>                    
            : 
            null

        }
        
    </>
  )
}

export default TopContent