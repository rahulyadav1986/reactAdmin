import style from './style.module.scss'
import FilterIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg"
import CircleIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/circle.svg"
const OverallDashboardFilter = () => {
  return (
    <div className={`${style.filter_wrapper} d-flex align-items-center justify-content-end`}>
      <div className={`${style.filter_button} d-flex align-items-center`}>
          <span>Process: <strong>All</strong> </span> 
          <span><img src={FilterIcon} alt="" /></span>
      </div>
      <div className={`${style.filter_button} d-flex align-items-center`}>
          <span>Channel: <strong>All</strong> </span> 
          <span><img src={FilterIcon} alt="" /></span>
      </div>
      <div className={`${style.filter_button} ${style.date} d-flex align-items-center`}>
          <span><img src={CircleIcon} alt="" /></span>
          <span>Jan -1, '23 - Jun 24, '23 (YTD)</span> 
      </div>
    </div>
  )
}

export default OverallDashboardFilter