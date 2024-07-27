import { useContext } from 'react'
import style from './style.module.scss'
import { ContextReport } from '../../../../../../../contexts/reportContext'
import FilterReportType from './FilterReportType'
import FilterTeam from './FilterTeam'
import Skills from './Skills'
import FilterDateRange from './FilterDateRange'
import AddFilterButtons from './AddFilterButtons'
import ResetDefaultPop from './ResetDefaultPop'

const InteractionFilter = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={`${style.filter_area} d-flex`}>
       { contextFilterReport.filterReportPop || contextFilterReport.filterTeamPop || contextFilterReport.filterSkillPop || contextFilterReport.filterDatePop || contextFilterReport.newAddFilterPop || contextFilterReport.addNewFilterPop ?  <div className={style.ovarlay} onClick={contextFilterReport.handleOverallDropOffFilter}></div> : null}
       <FilterReportType />
       { contextFilterReport.filterTeam ?  <FilterTeam /> : null }
       { contextFilterReport.filterSkill ? <Skills /> : null }
       { contextFilterReport.filterDate ? <FilterDateRange /> : null }
       { contextFilterReport.addFilter ? <AddFilterButtons /> : null }       
       { contextFilterReport.summaryDataView ? <p className={`${style.reset_text} ${contextFilterReport.summaryTab === 1 ? `${style.graphics_view}` : null} `} onClick={()=>contextFilterReport.handleResetDefaultPop(true)}>Reset to Defaults</p> : null}
       { contextFilterReport.resetDefaultPop === true ? <ResetDefaultPop /> : null }
    </div>
  ) 
}

export default InteractionFilter