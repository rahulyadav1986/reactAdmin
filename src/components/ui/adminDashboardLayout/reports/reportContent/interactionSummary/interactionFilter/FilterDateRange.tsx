import { useContext } from 'react'
import FilterDateRangePopup from './FilterDateRangePopup'
import style from './style.module.scss'
import Calendar from "/assets/dashboard/main_dashboard/admin/reports/calendar.svg"
import { ContextReport } from '../../../../../../../contexts/reportContext'
const FilterDateRange = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={style.filter_portion}>
        <label htmlFor="">Date Range</label>
        <div className={`${style.drop_down_area} ${style.date} ${style.highlight} d-flex align-items-center justify-content-between`} onClick={contextFilterReport.handleFilterDatePop}>
            <span className='d-flex align-items-center' >20 Sep 2023 to 20 Oct 2023</span> 
            <img src={Calendar} alt="" />
        </div>
        { contextFilterReport.filterDatePop ? <FilterDateRangePopup /> : null }
        
    </div>
  )
}

export default FilterDateRange