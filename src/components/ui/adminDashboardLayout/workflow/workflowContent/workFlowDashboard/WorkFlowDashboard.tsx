
import { useContext } from 'react'
import { ContextWorkFlowInsight } from '../../../../../../contexts/workFlowInsightContext'
import ViewIntents from './viewIntents/ViewIntents'
import DashboardWorkflow from './dashboardWorkflow/DashboardWorkflow'
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'
import CreateIntent from '../mainFlow/nodeSettingsPop/CreateIntent'

const WorkFlowDashboard = () => {
  const contentWorkFlowIntent = useContext(ContextWorkFlowInsight)
  const contextWorkflow = useContext(ContextWorkflow)
  return (
    <>
      {
        contentWorkFlowIntent.viewIntent === true ? <ViewIntents /> : <DashboardWorkflow />
      }
      {
        contextWorkflow.createIntent === true ? <CreateIntent /> : null
      }
    </>
    
  )
}

export default WorkFlowDashboard