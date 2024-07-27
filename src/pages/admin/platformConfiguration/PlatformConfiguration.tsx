import { useContext } from 'react'
import style from './style.module.scss'
import { ContextWorkflow } from '../../../contexts/workflowContext'
import ActiveFlow from '../../../components/ui/adminDashboardLayout/workflow/workflowContent/activeFlow/ActiveFlow'
import DashboardConfiguration from '../../../components/ui/adminDashboardLayout/platformConfiguration/dashboard/DashboardConfiguration'
import WorkflowHeader from '../../../components/ui/adminDashboardLayout/workflow/workflowHeader/WorkflowHeader'
import WorkFlowInsightDetails from '../../../components/ui/adminDashboardLayout/workflow/workflowContent/workFlowDashboard/workFlowDashboardDetails/workFlowInsightDetails/WorkFlowInsightDetails'


const PlatformConfiguration = () => {
  const contextWorkflowSidebarTab = useContext(ContextWorkflow)
  return (
    <div className={style.platform_configuration_wrapper}>
        <WorkflowHeader />
        {
          contextWorkflowSidebarTab.sidebarTab === 0 ? 
          <DashboardConfiguration /> : 
          contextWorkflowSidebarTab.sidebarTab === 1 ? 
          <ActiveFlow /> : 
          contextWorkflowSidebarTab.sidebarTab === 2 ? 
          <WorkFlowInsightDetails /> : null
        }
    </div>
  )
}

export default PlatformConfiguration