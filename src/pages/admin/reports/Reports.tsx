import { useContext } from 'react'
import ActiveFlow from '../../../components/ui/adminDashboardLayout/workflow/workflowContent/activeFlow/ActiveFlow'
import WorkFlowInsightDetails from '../../../components/ui/adminDashboardLayout/workflow/workflowContent/workFlowDashboard/workFlowDashboardDetails/workFlowInsightDetails/WorkFlowInsightDetails'
import WorkflowHeader from '../../../components/ui/adminDashboardLayout/workflow/workflowHeader/WorkflowHeader'
import style from './style.module.scss'
import { ContextWorkflow } from '../../../contexts/workflowContext'
import ReportDashboard from '../../../components/ui/adminDashboardLayout/reports/ReportDashboard'
import { TablePopupContext } from '../../../contexts/tablePopupContext'

const Reports = () => {
  const contextWorkflowSidebarTab = useContext(ContextWorkflow)
  return (
    <div className={style.report_wrapper}>
        <WorkflowHeader />
        {
          contextWorkflowSidebarTab.sidebarTab === 0 ? 
          <TablePopupContext><ReportDashboard /></TablePopupContext>  : 
          contextWorkflowSidebarTab.sidebarTab === 1 ? 
          <ActiveFlow /> : 
          contextWorkflowSidebarTab.sidebarTab === 2 ? 
          <WorkFlowInsightDetails /> : null
        }
    </div>
  )
}

export default Reports