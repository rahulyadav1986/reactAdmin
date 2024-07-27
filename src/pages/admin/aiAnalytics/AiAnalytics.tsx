import style from "./style.module.scss"
import { useContext } from 'react'
import { ContextWorkflow } from '../../../contexts/workflowContext'
import AiAnalyticsDashboard from "../../../components/ui/adminDashboardLayout/aiAnalytics/aiAnalyticsDashboard/AiAnalyticsDashboard"
import TableDetails from "../../../components/ui/adminDashboardLayout/aiAnalytics/tableDetails/TableDetails"


const AiAnalytics = () => {
  const contextWorkflowSidebarTab = useContext(ContextWorkflow)
  return (
    <>
      <div className={style.ai_analytics_wrapper}>
        {
          contextWorkflowSidebarTab.sidebarTab === 0 ? <AiAnalyticsDashboard /> : contextWorkflowSidebarTab.sidebarTab === 1 ? <TableDetails /> : null
        }
      </div>
    </>
    
  )
}

export default AiAnalytics