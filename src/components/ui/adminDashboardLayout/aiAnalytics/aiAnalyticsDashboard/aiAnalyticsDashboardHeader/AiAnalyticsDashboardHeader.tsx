import style from './style.module.scss'
import FilterIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg"
import CircleIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/circle.svg"
const AiAnalyticsDashboardHeader = () => {
  return (
        <div className={`${style.header_area} d-flex align-items-center justify-content-between`}>
            <h1>AI Analytics</h1>
            <div className={style.filter_area}>
                <div className={`${style.filter_button_area} d-flex align-items-center`}>
                    <div className={`${style.filter_button} d-flex align-items-center`}>
                        <span>Process: <strong>All</strong> </span> 
                        <span><img src={FilterIcon} alt="" /></span>
                    </div>
                    <div className={`${style.filter_button} d-flex align-items-center`}>
                        <span>Service: <strong>All</strong> </span> 
                        <span><img src={FilterIcon} alt="" /></span>
                    </div>
                    <div className={`${style.filter_button} d-flex align-items-center`}>
                        <span>Channel: <strong>All</strong> </span> 
                        <span><img src={FilterIcon} alt="" /></span>
                    </div>
                    <div className={`${style.filter_button} ${style.date} d-flex align-items-center`}>
                        <span><img src={CircleIcon} alt="" /></span>
                        <span>Jan -1, ‘23 – Jun 24, ‘23 (YTD)</span> 
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default AiAnalyticsDashboardHeader