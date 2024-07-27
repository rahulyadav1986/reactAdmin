import WorkFlowCards from './workFlowCards/WorkFlowCards'
import style from './style.module.scss'

import { useContext } from 'react'

import { ContextWorkflow } from '../../../../../../../contexts/workflowContext'
import { createPortal } from 'react-dom'
import ActiveWorkFlowStepPop from '../../activeWorkFlowStepPop/ActiveWorkFlowStepPop'
import DashboardWorkFlowHeader from './dashboardWorkFlowHeader/DashboardWorkFlowHeader'

const DashboardWorkflow = () => {
 
  const contextWorkFlow =  useContext(ContextWorkflow)
  return (
    <>
        <div className={style.WorkFlowDashboard_wrapper}>
            <DashboardWorkFlowHeader />
            <WorkFlowCards />
            {/* <RecentWorkflows />
            <HelpGuide /> */}
        </div>
        {
            contextWorkFlow.newWorkflowPop === true ? createPortal(<ActiveWorkFlowStepPop />, document.body): null
        }
    </>
    
  )
}

export default DashboardWorkflow