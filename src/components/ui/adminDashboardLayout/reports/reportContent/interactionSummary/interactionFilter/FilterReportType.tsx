import { useContext } from 'react'
import style from './style.module.scss'
import { ContextReport } from '../../../../../../../contexts/reportContext'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/down.svg"
import { ReportTypeData } from './Data'
const FilterReportType = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
        <div className={style.filter_portion}>
            <label htmlFor="">Report Type <span>*</span></label>
            <div className={`${contextFilterReport.filterTextHighlighted && style.highlight} ${style.drop_down_area} d-flex align-items-center justify-content-between`} onClick={contextFilterReport.handleFilterReportPop}>
                <span>{contextFilterReport.filterReportOption}</span> 
                <img src={DownArrow} alt="" />
            </div>
            {
                contextFilterReport.filterReportPop &&
                <ul className={style.filter_pop_wrapper}>
                    {
                        ReportTypeData.map((item)=>{
                            return(
                            <li key={item.id} onClick={contextFilterReport.handleFilterReportOption}>{item.label}</li>
                            )
                        })
                    }
                </ul>
            }
        </div>
  )
}

export default FilterReportType