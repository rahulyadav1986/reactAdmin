import { useContext } from 'react'
import InteractionFilter from './interactionFilter/interactionFilter'
import InteractionSummaryData from './interactionSummaryData/InteractionSummaryData'
import style from './style.module.scss'
import { ContextReport } from '../../../../../../contexts/reportContext'

const InteractionSummary = () => {
   const contextFilterReport = useContext(ContextReport)
  return (
     <div className={style.interaction_summary_wrapper}>
         { contextFilterReport.filterReportPop  === true || contextFilterReport.filterTeamPop === true || contextFilterReport.filterSkillPop === true || contextFilterReport.filterDatePop === true || contextFilterReport.newAddFilterPop === true || contextFilterReport.addNewFilterPop === true ?  <div className={style.ovarlay} onClick={contextFilterReport.handleOverallDropOffFilter}></div> : null}
        <InteractionFilter />
        <InteractionSummaryData />
     </div>
  )
}

export default InteractionSummary