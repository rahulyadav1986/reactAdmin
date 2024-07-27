import { useContext } from 'react'
import InsightHeaderStatus from './insightHeaderStatus/InsightHeaderStatus'
import LiveWorkFlowsSnapShort from './liveWorkFlowsSnapShort/LiveWorkFlowsSnapShort'
import style from './style.module.scss'
import WorkFlowChartStatus from './workFlowChartStatus/WorkFlowChartStatus'
import WorkFlowStatusHeader from './workFlowStatusHeader/WorkFlowStatusHeader'
import { ContextWorkFlowInsight } from '../../../../../../../../contexts/workFlowInsightContext'
import LiveFlow from './liveFlow/LiveFlow'
import { useLocation } from 'react-router-dom'


const WorkFlowInsightDetails = () => {
  const contentWorkflowInsightTab = useContext(ContextWorkFlowInsight)
  const location = useLocation()
  const CommonLocation = location.pathname.indexOf('/platform-configuration')>=0 || location.pathname.indexOf('/reports')>=0 || location.pathname.indexOf('/campaign-manager')>=0
  return (
    <div className={style.workflow_insight_wrapper}>
      {
        CommonLocation ? null :  <WorkFlowStatusHeader /> 
      }
      {
        contentWorkflowInsightTab.insightWorkFlowTab === 0 ? 
        <>
          <InsightHeaderStatus />
          <WorkFlowChartStatus />
          <LiveWorkFlowsSnapShort />
        </> : <LiveFlow />
      }
        
    </div>
  )
}

export default WorkFlowInsightDetails