import { useContext } from 'react'
import style from './style.module.scss'
import { ContextWorkFlowInsight } from '../../../../../../../../../contexts/workFlowInsightContext'

const WorkFlowStatusHeader = () => {
  const contentWorkflowInsightTab = useContext(ContextWorkFlowInsight)
  return (
        <div className={`${style.work_flow_insight_header_area} d-flex align-items-center justify-content-between`}>
          <div className={`${style.left} d-flex align-items-center`}>
            <ul className={style.bedcrumb}>
                <li className={style.main}>Dashboard</li>
                <li className={style.main}>IVR</li>
                <li>My First IVR Flow</li>
            </ul>
            <ul className={`${style.check_area} d-flex align-items-center`}>
                <li>draft</li>
                <li className={style.active}>live</li>
            </ul>
            <ul className={`${style.flow_tab_area} d-flex align-items-center`}>
              <li className={`${contentWorkflowInsightTab.insightWorkFlowTab === 0 ? style.active : null}`} onClick={()=>contentWorkflowInsightTab.handleInsightWorkFlowTab(0)}>IVR Insights</li>
              <li className={`${contentWorkflowInsightTab.insightWorkFlowTab === 1 ? style.active : null}`} onClick={()=>contentWorkflowInsightTab.handleInsightWorkFlowTab(1)}>IVR Live Flow</li>
            </ul>
          </div>
          <div className={`${style.time_wrap} d-flex align-items-center justify-content-end`}>
            <span>Refresh every</span>
            <button className={`${style.button} d-flex align-items-center`}>15 Secs</button>
          </div>
        </div>
  )
}

export default WorkFlowStatusHeader