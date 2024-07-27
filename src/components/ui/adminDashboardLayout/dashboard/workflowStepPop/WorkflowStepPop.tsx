import {useContext} from 'react'
import style from './style.module.scss';
import CrossIcon from '/assets/dashboard/main_dashboard/admin/workflowPop/cross.svg';
import { ContextAdminDashboard } from '../../../../../contexts/adminDashboardContext';
import TopContent from './TopContent';
import BottomContent from './BottomContent';
const WorkflowStepPop = () => {
  const contextDashboard = useContext(ContextAdminDashboard)
  return (
    <>
       {
         contextDashboard.buildBotOpenPop === true ? 
          <div className={`${style.workflow_pop_wrapper} d-flex align-items-center justify-content-center`}>
            <div className="overlay" onClick={contextDashboard.handleCloseBotPop}></div>
            <div className={style.main_wrapper}>
              <span className={style.cross} onClick={contextDashboard.handleCloseBotPop}>
                <img src={CrossIcon} alt="" />
              </span>
              <div className={style.top_cover_area}>
                <TopContent />
              </div>
              <div className={`${style.bottom_content_area} ${contextDashboard.buildBotPopSecondStep === true || contextDashboard.buildBotPopThirdStep === true || contextDashboard.buildBotPopFourthStep === true || contextDashboard.buildBotPopFifthStep === true ? style.align2 : null} d-flex flex-column`}>                
                <BottomContent />
              </div>
            </div>
          </div> : null
       }
    </>
    
  );
};

export default WorkflowStepPop;
